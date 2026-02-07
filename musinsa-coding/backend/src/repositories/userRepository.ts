import { getDb } from "../db/client.js";
import type { User, UserPublic } from "../types/auth.js";

export function findByNickname(nickname: string): User | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM users WHERE nickname = ?")
    .get(nickname) as User | undefined;
}

export function findByEmail(email: string): User | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(email) as User | undefined;
}

export function findById(id: number): User | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM users WHERE id = ?")
    .get(id) as User | undefined;
}

export function create(
  nickname: string,
  email: string,
  passwordHash: string,
): UserPublic {
  const db = getDb();
  const result = db
    .prepare(
      "INSERT INTO users (nickname, email, password_hash) VALUES (?, ?, ?)",
    )
    .run(nickname, email, passwordHash);

  return {
    id: result.lastInsertRowid as number,
    email,
    nickname,
    created_at: new Date().toISOString(),
  };
}

export function incrementFailedAttempts(userId: number): void {
  const db = getDb();
  db.prepare(
    "UPDATE users SET failed_login_attempts = failed_login_attempts + 1 WHERE id = ?",
  ).run(userId);
}

export function lockAccount(userId: number, lockedUntil: string): void {
  const db = getDb();
  db.prepare("UPDATE users SET locked_until = ? WHERE id = ?").run(
    lockedUntil,
    userId,
  );
}

export function resetFailedAttempts(userId: number): void {
  const db = getDb();
  db.prepare(
    "UPDATE users SET failed_login_attempts = 0, locked_until = NULL WHERE id = ?",
  ).run(userId);
}
