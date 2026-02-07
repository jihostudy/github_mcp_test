import { z } from "zod/v4";

export const addItemSchema = z.object({
  productId: z
    .number()
    .int("상품 ID는 정수여야 합니다")
    .positive("상품 ID는 양수여야 합니다"),
  quantity: z
    .number()
    .int("수량은 정수여야 합니다")
    .min(1, "수량은 1 이상이어야 합니다")
    .max(99, "수량은 99 이하여야 합니다"),
  selectedOption: z
    .string()
    .min(1, "옵션을 선택해주세요")
    .max(100, "옵션은 100자 이하여야 합니다"),
});

export const updateQuantitySchema = z.object({
  quantity: z
    .number()
    .int("수량은 정수여야 합니다")
    .min(1, "수량은 1 이상이어야 합니다")
    .max(99, "수량은 99 이하여야 합니다"),
});

export const removeItemsSchema = z.object({
  itemIds: z
    .array(z.number().int().positive())
    .min(1, "삭제할 아이템을 선택해주세요"),
});

export type AddItemInput = z.infer<typeof addItemSchema>;
export type UpdateQuantityInput = z.infer<typeof updateQuantitySchema>;
export type RemoveItemsInput = z.infer<typeof removeItemsSchema>;
