import * as couponRepo from "../repositories/couponRepository.js";
import * as pointRepo from "../repositories/pointRepository.js";
import type {
  UserCouponWithDetails,
  PointHistory,
  PaginatedResponse,
} from "../types/mypage.js";

export function getCoupons(userId: number): UserCouponWithDetails[] {
  return couponRepo.findByUserId(userId);
}

export function getPoints(
  userId: number,
  options: { page: number; limit: number },
): PaginatedResponse<PointHistory> & { balance: number } {
  const offset = (options.page - 1) * options.limit;
  const { histories, total } = pointRepo.findByUserId(userId, {
    limit: options.limit,
    offset,
  });
  const balance = pointRepo.getBalance(userId);

  return {
    data: histories,
    total,
    page: options.page,
    limit: options.limit,
    hasMore: offset + options.limit < total,
    balance,
  };
}

export function getAvailableCouponCount(userId: number): number {
  return couponRepo.getAvailableCount(userId);
}

export function getPointBalance(userId: number): number {
  return pointRepo.getBalance(userId);
}
