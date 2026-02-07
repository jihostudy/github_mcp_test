import type { Request, Response } from "express";
import * as orderService from "../services/orderService.js";

function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getOrders(req: Request, res: Response): void {
  const userId = getUserId(req);
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));
  const status = req.query.status as string | undefined;

  const result = orderService.getOrders(userId, { status, page, limit });
  res.json(result);
}

export function getOrderDetail(req: Request, res: Response): void {
  const userId = getUserId(req);
  const orderId = Number(req.params.id);

  if (!orderId) {
    res.status(400).json({ error: "유효하지 않은 주문 ID입니다" });
    return;
  }

  const order = orderService.getOrderDetail(userId, orderId);
  if (!order) {
    res.status(404).json({ error: "주문을 찾을 수 없습니다" });
    return;
  }

  res.json(order);
}
