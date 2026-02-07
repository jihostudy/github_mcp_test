import type { Request, Response, NextFunction } from "express";
import { verifyAccessToken } from "../utils/jwt.js";

declare global {
  namespace Express {
    interface Request {
      userId?: number;
      userNickname?: string;
    }
  }
}

export function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "인증 토큰이 필요합니다" });
    return;
  }

  const token = header.slice(7);
  try {
    const payload = verifyAccessToken(token);
    req.userId = payload.sub;
    req.userNickname = payload.nickname;
    next();
  } catch {
    res.status(401).json({ error: "유효하지 않거나 만료된 토큰입니다" });
  }
}
