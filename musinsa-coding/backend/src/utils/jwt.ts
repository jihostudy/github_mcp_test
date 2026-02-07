import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import {
  JWT_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
} from "../config/auth.js";
import type { JwtPayload } from "../types/auth.js";

export function signAccessToken(payload: {
  sub: number;
  nickname: string;
}): string {
  const jti = crypto.randomUUID();
  return jwt.sign({ ...payload, jti }, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
}

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as unknown as JwtPayload;
}

export function generateRefreshToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

export function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}
