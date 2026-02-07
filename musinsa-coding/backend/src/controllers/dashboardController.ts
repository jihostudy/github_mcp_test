import type { Request, Response } from "express";
import * as orderService from "../services/orderService.js";
import * as couponService from "../services/couponService.js";
import type { DashboardData } from "../types/mypage.js";

function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getDashboard(req: Request, res: Response): void {
  const userId = getUserId(req);

  const dashboard: DashboardData = {
    orderSummary: orderService.getOrderSummary(userId),
    points: couponService.getPointBalance(userId),
    couponCount: couponService.getAvailableCouponCount(userId),
  };

  res.json(dashboard);
}
