import * as orderRepo from "../repositories/orderRepository.js";
import type { OrderWithItems, PaginatedResponse, Order } from "../types/mypage.js";

export function getOrders(
  userId: number,
  options: { status?: string; page: number; limit: number },
): PaginatedResponse<Order> {
  const offset = (options.page - 1) * options.limit;
  const { orders, total } = orderRepo.findByUserId(userId, {
    status: options.status,
    limit: options.limit,
    offset,
  });

  return {
    data: orders,
    total,
    page: options.page,
    limit: options.limit,
    hasMore: offset + options.limit < total,
  };
}

export function getOrderDetail(
  userId: number,
  orderId: number,
): OrderWithItems | null {
  const order = orderRepo.findById(orderId, userId);
  if (!order) return null;

  const items = orderRepo.findItemsByOrderId(orderId);

  return { ...order, items };
}

export function getOrderSummary(userId: number) {
  return orderRepo.getOrderSummary(userId);
}
