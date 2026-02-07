import type { Request, Response } from "express";
import * as profileService from "../services/profileService.js";
import {
  updateProfileSchema,
  changePasswordSchema,
} from "../validators/profileValidator.js";

// 임시: auth 미들웨어 머지 전까지 userId를 쿼리/헤더에서 가져옴
function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getProfile(req: Request, res: Response): void {
  const userId = getUserId(req);
  const profile = profileService.getProfile(userId);

  if (!profile) {
    res.status(404).json({ error: "프로필을 찾을 수 없습니다" });
    return;
  }

  res.json(profile);
}

export function updateProfile(req: Request, res: Response): void {
  const userId = getUserId(req);
  const parsed = updateProfileSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "입력 데이터가 올바르지 않습니다", details: parsed.error.issues });
    return;
  }

  try {
    const updated = profileService.updateProfile(userId, parsed.data);
    res.json(updated);
  } catch (err: unknown) {
    if (err instanceof Error && "status" in err) {
      res.status((err as { status: number }).status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function changePassword(req: Request, res: Response): void {
  const userId = getUserId(req);
  const parsed = changePasswordSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "입력 데이터가 올바르지 않습니다", details: parsed.error.issues });
    return;
  }

  try {
    profileService.changePassword(
      userId,
      parsed.data.currentPassword,
      parsed.data.newPassword,
    );
    res.json({ message: "비밀번호가 변경되었습니다" });
  } catch (err: unknown) {
    if (err instanceof Error && "status" in err) {
      res.status((err as { status: number }).status).json({ error: err.message });
      return;
    }
    throw err;
  }
}

export function deleteAccount(req: Request, res: Response): void {
  const userId = getUserId(req);

  try {
    profileService.deleteAccount(userId);
    res.json({ message: "회원 탈퇴가 완료되었습니다" });
  } catch (err: unknown) {
    if (err instanceof Error && "status" in err) {
      res.status((err as { status: number }).status).json({ error: err.message });
      return;
    }
    throw err;
  }
}
