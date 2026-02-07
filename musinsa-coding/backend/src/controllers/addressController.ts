import type { Request, Response } from "express";
import * as addressService from "../services/addressService.js";
import { createAddressSchema, updateAddressSchema } from "../validators/addressValidator.js";

function getUserId(req: Request): number {
  return Number(req.headers["x-user-id"]) || 1;
}

export function getAddresses(req: Request, res: Response): void {
  const userId = getUserId(req);
  const addresses = addressService.getAddresses(userId);
  res.json(addresses);
}

export function createAddress(req: Request, res: Response): void {
  const userId = getUserId(req);
  const parsed = createAddressSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "입력 데이터가 올바르지 않습니다", details: parsed.error.issues });
    return;
  }

  const address = addressService.createAddress(userId, parsed.data);
  res.status(201).json(address);
}

export function updateAddress(req: Request, res: Response): void {
  const userId = getUserId(req);
  const addressId = Number(req.params.id);
  const parsed = updateAddressSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "입력 데이터가 올바르지 않습니다", details: parsed.error.issues });
    return;
  }

  const address = addressService.updateAddress(addressId, userId, parsed.data);
  if (!address) {
    res.status(404).json({ error: "배송지를 찾을 수 없습니다" });
    return;
  }

  res.json(address);
}

export function deleteAddress(req: Request, res: Response): void {
  const userId = getUserId(req);
  const addressId = Number(req.params.id);

  const deleted = addressService.deleteAddress(addressId, userId);
  if (!deleted) {
    res.status(404).json({ error: "배송지를 찾을 수 없습니다" });
    return;
  }

  res.json({ message: "배송지가 삭제되었습니다" });
}
