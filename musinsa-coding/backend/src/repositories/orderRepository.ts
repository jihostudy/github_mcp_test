import { getDb } from "../db/client.js";
import type { Order, OrderItem, OrderSummary } from "../types/mypage.js";

export function findByUserId(
  userId: number,
  options: { status?: string; limit: number; offset: number },
): { orders: Order[]; total: number } {
  const db = getDb();
  const conditions = ["o.user_id = ?"];
  const params: (string | number)[] = [userId];

  if (options.status && options.status !== "all") {
    conditions.push("o.status = ?");
    params.push(options.status);
  }

  const where = conditions.join(" AND ");

  const total = db
    .prepare(`SELECT COUNT(*) as count FROM orders o WHERE ${where}`)
    .get(...params) as { count: number };

  const orders = db
    .prepare(
      `SELECT * FROM orders o WHERE ${where} ORDER BY o.ordered_at DESC LIMIT ? OFFSET ?`,
    )
    .all(...params, options.limit, options.offset) as Order[];

  return { orders, total: total.count };
}

export function findById(orderId: number, userId: number): Order | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM orders WHERE id = ? AND user_id = ?")
    .get(orderId, userId) as Order | undefined;
}

export function findItemsByOrderId(orderId: number): (OrderItem & {
  product_name: string;
  product_brand: string;
  product_thumbnail: string | null;
})[] {
  const db = getDb();
  return db
    .prepare(
      `SELECT oi.*, p.name as product_name, p.brand as product_brand, p.thumbnail_url as product_thumbnail
       FROM order_items oi
       JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ?`,
    )
    .all(orderId) as (OrderItem & {
    product_name: string;
    product_brand: string;
    product_thumbnail: string | null;
  })[];
}

export function getOrderSummary(userId: number): OrderSummary {
  const db = getDb();
  const rows = db
    .prepare(
      `SELECT status, COUNT(*) as count
       FROM orders WHERE user_id = ?
       GROUP BY status`,
    )
    .all(userId) as { status: string; count: number }[];

  const summary: OrderSummary = {
    pending: 0,
    paid: 0,
    shipping: 0,
    delivered: 0,
    confirmed: 0,
  };

  for (const row of rows) {
    if (row.status in summary) {
      summary[row.status as keyof OrderSummary] = row.count;
    }
  }

  return summary;
}
