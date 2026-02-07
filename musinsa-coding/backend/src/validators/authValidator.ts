import { z } from "zod/v4";

export const registerSchema = z.object({
  nickname: z
    .string()
    .min(2, "닉네임은 2자 이상이어야 합니다")
    .max(20, "닉네임은 20자 이하여야 합니다")
    .regex(
      /^[a-zA-Z0-9가-힣]+$/,
      "닉네임은 영문, 숫자, 한글만 사용할 수 있습니다",
    ),
  email: z.email("유효한 이메일 형식이 아닙니다"),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다")
    .max(128, "비밀번호는 128자 이하여야 합니다")
    .regex(/[a-z]/, "비밀번호에 소문자가 포함되어야 합니다")
    .regex(/[A-Z]/, "비밀번호에 대문자가 포함되어야 합니다")
    .regex(/[0-9]/, "비밀번호에 숫자가 포함되어야 합니다")
    .regex(/[^a-zA-Z0-9]/, "비밀번호에 특수문자가 포함되어야 합니다"),
});

export const loginSchema = z.object({
  nickname: z.string().min(1, "닉네임을 입력해주세요"),
  password: z.string().min(1, "비밀번호를 입력해주세요"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
