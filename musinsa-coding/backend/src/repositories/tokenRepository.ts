import { getDb } from "../db/client.js";
import type { RefreshTokenRow } from "../types/auth.js";

export function save(
  userId: number,
  tokenHash: string,
  expiresAt: string,
): void {
  const db = getDb();
  db.prepare(
    "INSERT INTO refresh_tokens (user_id, token_hash, expires_at) VALUES (?, ?, ?)",
  ).run(userId, tokenHash, expiresAt);
}

export function findByTokenHash(
  tokenHash: string,
): RefreshTokenRow | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM refresh_tokens WHERE token_hash = ?")
    .get(tokenHash) as RefreshTokenRow | undefined;
}

export function revoke(tokenHash: string): void {
  const db = getDb();
  db.prepare(
    "UPDATE refresh_tokens SET revoked_at = CURRENT_TIMESTAMP WHERE token_hash = ?",
  ).run(tokenHash);
}

export function revokeAllForUser(userId: number): void {
  const db = getDb();
  db.prepare(
    "UPDATE refresh_tokens SET revoked_at = CURRENT_TIMESTAMP WHERE user_id = ? AND revoked_at IS NULL",
  ).run(userId);
}

export function deleteExpired(): void {
  const db = getDb();
  db.prepare(
    "DELETE FROM refresh_tokens WHERE expires_at < CURRENT_TIMESTAMP",
  ).run();
}
