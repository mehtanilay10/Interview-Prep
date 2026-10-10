/**
 * YouTube Data API v3 client.
 *
 * Implemented on `fetch` (no SDK dependency) with:
 *  - OAuth refresh-token flow with in-memory access-token caching
 *  - resumable upload protocol (`uploadType=resumable`) with progress reporting
 *  - idempotent publication: `youtubeVideoId` is unique in the database, so an
 *    unknown upload outcome is resolved by reconciliation, never by re-upload
 *  - structured errors so the publisher can distinguish "quota exhausted"
 *    (pause the queue) from "transient network failure" (retry with backoff)
 */

export interface YouTubeConfig {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  channelId?: string;
  playlistId?: string;
  apiBase?: string;
  uploadBase?: string;
}

export type YouTubeErrorKind = 'quota_exceeded' | 'auth' | 'not_found' | 'rate_limited' | 'bad_request' | 'unknown';

export class YouTubeError extends Error {
  constructor(
    readonly kind: YouTubeErrorKind,
    message: string,
    readonly status?: number,
    readonly body?: unknown,
  ) {
    super(message);
    this.name = 'YouTubeError';
  }
}

export interface UploadMetadata {
  title: string;
  description: string;
  tags: string[];
  categoryId: string;
  privacyStatus: 'private' | 'unlisted' | 'public';
  language?: string;
  madeForKids?: boolean;
}

export interface UploadOptions extends UploadMetadata {
  filePath: string;
  contentType?: string;
  playlistId?: string;
  onProgress?: (uploadedBytes: number, totalBytes: number) => void;
}

export interface UploadResult {
  videoId: string;
  privacyStatus: string;
}

export interface VideoStatus {
  videoId: string;
  privacyStatus: string;
  title: string;
  description: string;
  deleted: boolean;
}

const CHUNK_SIZE = 8 * 1024 * 1024; // 8 MB upload chunks

export class YouTubeClient {
  private accessToken: { value: string; expiresAt: number } | null = null;

  constructor(private readonly config: YouTubeConfig) {}

  /** Obtains (and caches) an access token from the refresh token. */
  async getAccessToken(): Promise<string> {
    if (this.accessToken && this.accessToken.expiresAt > Date.now() + 60_000) {
      return this.accessToken.value;
    }

    const response = await fetch(`${this.config.apiBase ?? 'https://www.googleapis.com'}/oauth2/v3/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        refresh_token: this.config.refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      const body = await safeJson(response);
      throw new YouTubeError('auth', `token refresh failed: ${JSON.stringify(body)}`.slice(0, 300), response.status, body);
    }

    const json = (await response.json()) as { access_token?: string; expires_in?: number };
    if (!json.access_token) throw new YouTubeError('auth', 'token response had no access_token', response.status);
    this.accessToken = {
      value: json.access_token,
      expiresAt: Date.now() + (json.expires_in ?? 3600) * 1000,
    };
    return this.accessToken.value;
  }

  /** Uploads a video with the resumable protocol and returns its video id. */
  async uploadVideo(options: UploadOptions): Promise<UploadResult> {
    const fs = await import('node:fs/promises');
    const totalBytes = (await fs.stat(options.filePath)).size;
    if (totalBytes === 0) throw new YouTubeError('bad_request', 'video file is empty');

    const accessToken = await this.getAccessToken();
    const uploadBase = this.config.uploadBase ?? 'https://www.googleapis.com/upload/youtube/v3/videos';
    const sessionUrl = `${uploadBase}?uploadType=resumable&part=snippet,status`;

    const start = await fetch(sessionUrl, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json; charset=UTF-8',
        'x-upload-content-length': String(totalBytes),
        'x-upload-content-type': options.contentType ?? 'video/mp4',
      },
      body: JSON.stringify({
        snippet: {
          title: options.title.slice(0, 100),
          description: options.description.slice(0, 5000),
          tags: options.tags.slice(0, 20),
          categoryId: options.categoryId,
          defaultLanguage: options.language ?? 'en',
        },
        status: {
          privacyStatus: options.privacyStatus,
          selfDeclaredMadeForKids: options.madeForKids ?? false,
        },
      }),
    });

    if (!start.ok) {
      throw await this.toError(start, 'starting resumable upload');
    }
    const resumableUrl = start.headers.get('location');
    if (!resumableUrl) throw new YouTubeError('bad_request', 'resumable upload session URL missing', start.status);

    const buffer = await fs.readFile(options.filePath);
    let uploaded = 0;
    let finalBody: UploadResult | null = null;

    while (uploaded < totalBytes) {
      const chunk = buffer.subarray(uploaded, Math.min(uploaded + CHUNK_SIZE, totalBytes));
      const end = uploaded + chunk.length - 1;
      const response = await fetch(resumableUrl, {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${this.accessToken?.value ?? (await this.getAccessToken())}`,
          'content-length': String(chunk.length),
          'content-range': `bytes ${uploaded}-${end}/${totalBytes}`,
        },
        body: chunk,
      });

      if (response.status === 308) {
        const range = response.headers.get('range');
        uploaded = range ? Number.parseInt(range.split('-')[1] ?? '0', 10) + 1 : end + 1;
        options.onProgress?.(uploaded, totalBytes);
        continue;
      }
      if (!response.ok) {
        throw await this.toError(response, `uploading chunk ${uploaded}`);
      }

      const json = (await response.json()) as { id?: string; status?: { privacyStatus?: string } };
      if (!json.id) throw new YouTubeError('bad_request', 'upload response had no video id', response.status);
      finalBody = { videoId: json.id, privacyStatus: json.status?.privacyStatus ?? options.privacyStatus };
      options.onProgress?.(totalBytes, totalBytes);
      break;
    }

    if (!finalBody) {
      throw new YouTubeError('unknown', 'upload finished without a video id');
    }

    if (options.playlistId) {
      try {
        await this.addToPlaylist(finalBody.videoId, options.playlistId);
      } catch {
        // Playlist assignment must never fail an otherwise successful upload.
      }
    }

    return finalBody;
  }

  /** Sets the privacy status of an existing video (unlisted → public). */
  async setPrivacyStatus(videoId: string, privacyStatus: 'private' | 'unlisted' | 'public'): Promise<void> {
    const accessToken = await this.getAccessToken();
    const response = await fetch(`${this.config.apiBase ?? 'https://www.googleapis.com'}/youtube/v3/videos?part=status`, {
      method: 'PUT',
      headers: { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json' },
      body: JSON.stringify({ id: videoId, status: { privacyStatus } }),
    });
    if (!response.ok) throw await this.toError(response, `setting privacy to ${privacyStatus}`);
  }

  async addToPlaylist(videoId: string, playlistId: string): Promise<void> {
    const accessToken = await this.getAccessToken();
    const response = await fetch(`${this.config.apiBase ?? 'https://www.googleapis.com'}/youtube/v3/playlistItems?part=snippet`, {
      method: 'POST',
      headers: { authorization: `Bearer ${accessToken}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        snippet: {
          playlistId,
          resourceId: { kind: 'youtube#video', videoId },
        },
      }),
    });
    if (!response.ok) throw await this.toError(response, 'adding to playlist');
  }

  /** Lists the videos on the channel's uploads playlist (for reconciliation). */
  async listUploadedVideos(limit = 200): Promise<VideoStatus[]> {
    const accessToken = await this.getAccessToken();
    const base = this.config.apiBase ?? 'https://www.googleapis.com';
    const headers = { authorization: `Bearer ${accessToken}` };

    const channelResponse = await fetch(`${base}/youtube/v3/channels?part=contentDetails&mine=true`, { headers });
    if (!channelResponse.ok) throw await this.toError(channelResponse, 'listing channel');
    const channelJson = (await channelResponse.json()) as {
      items?: Array<{ contentDetails?: { relatedPlaylists?: { uploads?: string } } }>;
    };
    const uploadsPlaylist = this.config.playlistId ?? channelJson.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
    if (!uploadsPlaylist) return [];

    const videoIds: string[] = [];
    let pageToken: string | undefined;
    do {
      const url = new URL(`${base}/youtube/v3/playlistItems`);
      url.searchParams.set('part', 'contentDetails');
      url.searchParams.set('playlistId', uploadsPlaylist);
      url.searchParams.set('maxResults', '50');
      if (pageToken) url.searchParams.set('pageToken', pageToken);
      const response = await fetch(url, { headers });
      if (!response.ok) throw await this.toError(response, 'listing uploads playlist');
      const json = (await response.json()) as {
        items?: Array<{ contentDetails?: { videoId?: string } }>;
        nextPageToken?: string;
      };
      for (const item of json.items ?? []) {
        if (item.contentDetails?.videoId) videoIds.push(item.contentDetails.videoId);
      }
      pageToken = json.nextPageToken;
      if (videoIds.length >= limit) break;
    } while (pageToken);

    const statuses: VideoStatus[] = [];
    for (let i = 0; i < videoIds.length; i += 50) {
      const batch = videoIds.slice(i, i + 50);
      const url = new URL(`${base}/youtube/v3/videos`);
      url.searchParams.set('part', 'snippet,status');
      url.searchParams.set('id', batch.join(','));
      const response = await fetch(url, { headers });
      if (!response.ok) throw await this.toError(response, 'fetching video statuses');
      const json = (await response.json()) as {
        items?: Array<{ id?: string; snippet?: { title?: string; description?: string }; status?: { privacyStatus?: string } }>;
      };
      for (const item of json.items ?? []) {
        if (!item.id) continue;
        statuses.push({
          videoId: item.id,
          privacyStatus: item.status?.privacyStatus ?? 'unknown',
          title: item.snippet?.title ?? '',
          description: item.snippet?.description ?? '',
          deleted: false,
        });
      }
    }
    return statuses;
  }

  private async toError(response: Response, action: string): Promise<YouTubeError> {
    const body = await safeJson(response);
    const reason = extractErrorReason(body);
    const kind = classifyError(response.status, reason);
    return new YouTubeError(kind, `${action} failed (${response.status}${reason ? ` ${reason}` : ''})`.slice(0, 300), response.status, body);
  }
}

function classifyError(status: number, reason: string): YouTubeErrorKind {
  if (status === 403 && (reason === 'quotaExceeded' || reason === 'dailyLimitExceeded')) return 'quota_exceeded';
  if (status === 403 && (reason === 'rateLimitExceeded' || reason === 'userRateLimitExceeded')) return 'rate_limited';
  if (status === 401 || status === 403) return 'auth';
  if (status === 404) return 'not_found';
  if (status === 429) return 'rate_limited';
  if (status >= 500) return 'unknown';
  return 'bad_request';
}

interface GoogleErrorBody {
  error?: { errors?: Array<{ reason?: string; message?: string }>; message?: string };
}

function extractErrorReason(body: unknown): string {
  const error = (body as GoogleErrorBody | null)?.error;
  return error?.errors?.[0]?.reason ?? error?.message ?? '';
}

async function safeJson(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

/** Creates a client from environment configuration; returns null when unset. */
export function createYouTubeClientFromEnv(): YouTubeClient | null {
  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;
  const refreshToken = process.env.YOUTUBE_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;
  return new YouTubeClient({
    clientId,
    clientSecret,
    refreshToken,
    channelId: process.env.YOUTUBE_CHANNEL_ID,
    playlistId: process.env.YOUTUBE_PLAYLIST_ID,
  });
}
