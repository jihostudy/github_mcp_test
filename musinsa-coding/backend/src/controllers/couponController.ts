import type { Request, Response } from "express";
import * as couponService from "../services/couponService.js";

function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getCoupons(req: Request, res: Response): void {
  const userId = getUserId(req);
  const coupons = couponService.getCoupons(userId);
  res.json(coupons);
}

export function getPoints(req: Request, res: Response): void {
  const userId = getUserId(req);
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 20));

  const result = couponService.getPoints(userId, { page, limit });
  res.json(result);
}
