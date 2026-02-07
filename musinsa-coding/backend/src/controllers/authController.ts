import type { Request, Response } from "express";
import { registerSchema, loginSchema } from "../validators/authValidator.js";
import * as authService from "../services/authService.js";
import { COOKIE_OPTIONS, REFRESH_COOKIE_NAME } from "../config/auth.js";

export async function register(req: Request, res: Response): Promise<void> {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  try {
    const { nickname, email, password } = parsed.data;
    const user = await authService.register(nickname, email, password);
    res.status(201).json(user);
  } catch (err) {
    if (err instanceof authService.ConflictError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.issues });
    return;
  }

  try {
    const { nickname, password } = parsed.data;
    const { user, tokens } = await authService.login(nickname, password);

    res.cookie(REFRESH_COOKIE_NAME, tokens.refreshToken, COOKIE_OPTIONS);
    res.json({ user, accessToken: tokens.accessToken });
  } catch (err) {
    if (err instanceof authService.AuthError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function refreshToken(req: Request, res: Response): void {
  const rawToken = req.cookies?.[REFRESH_COOKIE_NAME];
  if (!rawToken) {
    res.status(401).json({ error: "리프레시 토큰이 필요합니다" });
    return;
  }

  try {
    const tokens = authService.refresh(rawToken);
    res.cookie(REFRESH_COOKIE_NAME, tokens.refreshToken, COOKIE_OPTIONS);
    res.json({ accessToken: tokens.accessToken });
  } catch (err) {
    res.clearCookie(REFRESH_COOKIE_NAME, { path: "/api/auth" });
    if (err instanceof authService.AuthError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function logout(req: Request, res: Response): void {
  const rawToken = req.cookies?.[REFRESH_COOKIE_NAME];
  if (rawToken) {
    authService.logout(rawToken);
  }
  res.clearCookie(REFRESH_COOKIE_NAME, { path: "/api/auth" });
  res.json({ message: "로그아웃 되었습니다" });
}

export function me(req: Request, res: Response): void {
  try {
    const user = authService.getMe(req.userId!);
    res.json(user);
  } catch (err) {
    if (err instanceof authService.AuthError) {
      res.status(err.status).json({ error: err.message });
      return;
    }
    throw err;
  }
}
