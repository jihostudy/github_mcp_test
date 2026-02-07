import { z } from "zod/v4";

export const createAddressSchema = z.object({
  name: z.string().min(1, "배송지명을 입력해주세요").max(50),
  phone: z
    .string()
    .regex(/^01[016789]-?\d{3,4}-?\d{4}$/, "올바른 전화번호 형식이 아닙니다"),
  zipCode: z.string().regex(/^\d{5}$/, "올바른 우편번호 형식이 아닙니다"),
  address1: z.string().min(1, "주소를 입력해주세요").max(255),
  address2: z.string().max(255).nullable().optional(),
  isDefault: z.boolean().optional(),
});

export const updateAddressSchema = createAddressSchema.partial();

export type CreateAddressInput = z.infer<typeof createAddressSchema>;
export type UpdateAddressInput = z.infer<typeof updateAddressSchema>;
