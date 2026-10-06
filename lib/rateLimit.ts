type SlidingWindowEntry = {
  count: number;
  resetAt: number;
};

const stores = new Map<string, SlidingWindowEntry>();

function getKey(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0]?.trim() ?? realIp ?? 'unknown';
  return ip;
}

export function rateLimit(request: Request, options: { limit: number; windowMs: number }): { allowed: boolean; retryAfterMs?: number } {
  const key = getKey(request);
  const now = Date.now();
  const entry = stores.get(key);

  if (!entry || now >= entry.resetAt) {
    stores.set(key, {
      count: 1,
      resetAt: now + options.windowMs,
    });
    return { allowed: true };
  }

  if (entry.count >= options.limit) {
    return {
      allowed: false,
      retryAfterMs: entry.resetAt - now,
    };
  }

  entry.count += 1;
  return { allowed: true };
}
