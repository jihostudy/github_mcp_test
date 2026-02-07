import { getDb } from "../db/client.js";
import type { PointHistory } from "../types/mypage.js";

export function findByUserId(
  userId: number,
  options: { limit: number; offset: number },
): { histories: PointHistory[]; total: number } {
  const db = getDb();

  const total = db
    .prepare("SELECT COUNT(*) as count FROM point_histories WHERE user_id = ?")
    .get(userId) as { count: number };

  const histories = db
    .prepare(
      `SELECT * FROM point_histories
       WHERE user_id = ?
       ORDER BY created_at DESC LIMIT ? OFFSET ?`,
    )
    .all(userId, options.limit, options.offset) as PointHistory[];

  return { histories, total: total.count };
}

export function getBalance(userId: number): number {
  const db = getDb();
  const row = db
    .prepare(
      "SELECT COALESCE(SUM(amount), 0) as balance FROM point_histories WHERE user_id = ?",
    )
    .get(userId) as { balance: number };
  return row.balance;
}
