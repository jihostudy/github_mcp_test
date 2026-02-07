import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getDb } from "./client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCHEMA_PATH = path.resolve(__dirname, "../../db/schema.sql");

function migrate(): void {
  const db = getDb();

  const alterStatements = [
    "ALTER TABLE users ADD COLUMN failed_login_attempts INTEGER NOT NULL DEFAULT 0",
    "ALTER TABLE users ADD COLUMN locked_until TIMESTAMP",
  ];

  for (const sql of alterStatements) {
    try {
      db.exec(sql);
    } catch {
      // Column already exists — safe to ignore
    }
  }
}

export function initDb(): void {
  const schema = fs.readFileSync(SCHEMA_PATH, "utf-8");
  const db = getDb();
  db.exec(schema);
  migrate();
  scheduleTokenCleanup();
}

function scheduleTokenCleanup(): void {
  const CLEANUP_INTERVAL = 60 * 60 * 1000; // 1시간
  setInterval(() => {
    try {
      const db = getDb();
      db.prepare(
        "DELETE FROM refresh_tokens WHERE expires_at < CURRENT_TIMESTAMP OR revoked_at IS NOT NULL",
      ).run();
    } catch {
      // cleanup 실패는 무시
    }
  }, CLEANUP_INTERVAL);
}
