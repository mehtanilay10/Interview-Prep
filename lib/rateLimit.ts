type SlidingWindowEntry = {
  count: number;
  resetAt: number;
};

const stores = new Map<string, SlidingWindowEntry>();

// Periodically remove expired keys so that rotating keys (e.g. spoofed
// x-forwarded-for values) cannot grow the Map without bound.
const SWEEP_INTERVAL_MS = 60_000;
let lastSweptAt = 0;

function sweepExpired(now: number): void {
  if (now - lastSweptAt < SWEEP_INTERVAL_MS) return;
  lastSweptAt = now;
  for (const [key, entry] of stores) {
    if (now >= entry.resetAt) {
      stores.delete(key);
    }
  }
}

function getRequestIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  // Use the LAST entry of x-forwarded-for: with an appending proxy (nginx
  // `$proxy_add_x_forwarded_for`, Vercel overwriting with the real client IP)
  // the final value is added by the trusted proxy and cannot be forged by the
  // client. Earlier entries are client-controlled and must not be trusted.
  const ip = forwarded?.split(',').pop()?.trim() || realIp || 'unknown';
  return ip;
}

/**
 * In-memory sliding-window rate limiter, keyed per client IP and per route
 * (`METHOD:/path`) so each endpoint enforces its own independent limit.
 * Pass `label` to create a separate counter for a sub-path of handling
 * (e.g. throttling CSRF failures before the handler's own limit).
 */
export function rateLimit(
  request: Request,
  options: { limit: number; windowMs: number; label?: string }
): { allowed: boolean; retryAfterMs?: number } {
  const url = new URL(request.url);
  const key = `${getRequestIp(request)}:${options.label ?? `${request.method}:${url.pathname}`}`;
  const now = Date.now();
  sweepExpired(now);

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
