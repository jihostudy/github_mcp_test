import * as likeRepo from "../repositories/likeRepository.js";
import type { PaginatedResponse, UserLike } from "../types/mypage.js";

export function getLikes(
  userId: number,
  options: { page: number; limit: number },
): PaginatedResponse<UserLike> {
  const offset = (options.page - 1) * options.limit;
  const { likes, total } = likeRepo.findByUserId(userId, {
    limit: options.limit,
    offset,
  });

  return {
    data: likes,
    total,
    page: options.page,
    limit: options.limit,
    hasMore: offset + options.limit < total,
  };
}

export function addLike(userId: number, productId: number): void {
  likeRepo.add(userId, productId);
}

export function removeLike(userId: number, productId: number): void {
  likeRepo.remove(userId, productId);
}
