import crypto from "node:crypto";

// JWT
export const JWT_SECRET =
  process.env.JWT_SECRET ?? crypto.randomBytes(64).toString("hex");
export const ACCESS_TOKEN_EXPIRES_IN = "15m";
export const REFRESH_TOKEN_EXPIRES_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// Argon2id (OWASP 2024 minimum recommended)
export const ARGON2_OPTIONS = {
  memoryCost: 19456, // 19 MiB
  timeCost: 2,
  parallelism: 1,
} as const;

// Account lockout
export const MAX_FAILED_ATTEMPTS = 5;
export const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes

// Rate limiting
export const RATE_LIMIT = {
  global: { windowMs: 15 * 60 * 1000, max: 100 },
  login: { windowMs: 15 * 60 * 1000, max: 5 },
  register: { windowMs: 60 * 60 * 1000, max: 3 },
} as const;

// Cookie
export const REFRESH_COOKIE_NAME = "refresh_token";
export const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/api/auth",
  maxAge: REFRESH_TOKEN_EXPIRES_MS,
};
