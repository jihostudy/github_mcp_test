import { getDb } from "../db/client.js";
import type { UserCouponWithDetails } from "../types/mypage.js";

export function findByUserId(userId: number): UserCouponWithDetails[] {
  const db = getDb();
  return db
    .prepare(
      `SELECT uc.*, c.name, c.discount_type, c.discount_value,
              c.min_order_amount, c.max_discount, c.expires_at
       FROM user_coupons uc
       JOIN coupons c ON uc.coupon_id = c.id
       WHERE uc.user_id = ?
       ORDER BY uc.used_at IS NOT NULL, c.expires_at ASC`,
    )
    .all(userId) as UserCouponWithDetails[];
}

export function getAvailableCount(userId: number): number {
  const db = getDb();
  const row = db
    .prepare(
      `SELECT COUNT(*) as count
       FROM user_coupons uc
       JOIN coupons c ON uc.coupon_id = c.id
       WHERE uc.user_id = ? AND uc.used_at IS NULL AND c.expires_at > datetime('now')`,
    )
    .get(userId) as { count: number };
  return row.count;
}
