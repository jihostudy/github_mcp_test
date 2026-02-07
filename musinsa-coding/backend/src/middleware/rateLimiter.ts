import rateLimit from "express-rate-limit";
import { RATE_LIMIT } from "../config/auth.js";

export const globalLimiter = rateLimit({
  windowMs: RATE_LIMIT.global.windowMs,
  max: RATE_LIMIT.global.max,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "요청이 너무 많습니다. 잠시 후 다시 시도해주세요" },
});

export const loginLimiter = rateLimit({
  windowMs: RATE_LIMIT.login.windowMs,
  max: RATE_LIMIT.login.max,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "로그인 시도가 너무 많습니다. 15분 후 다시 시도해주세요" },
});

export const registerLimiter = rateLimit({
  windowMs: RATE_LIMIT.register.windowMs,
  max: RATE_LIMIT.register.max,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "회원가입 시도가 너무 많습니다. 1시간 후 다시 시도해주세요" },
});
