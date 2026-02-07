import * as addressRepo from "../repositories/addressRepository.js";
import type { UserAddress } from "../types/mypage.js";

export function getAddresses(userId: number): UserAddress[] {
  return addressRepo.findByUserId(userId);
}

export function createAddress(
  userId: number,
  data: {
    name: string;
    phone: string;
    zipCode: string;
    address1: string;
    address2?: string | null;
    isDefault?: boolean;
  },
): UserAddress {
  return addressRepo.create(userId, {
    name: data.name,
    phone: data.phone,
    zip_code: data.zipCode,
    address1: data.address1,
    address2: data.address2,
    is_default: data.isDefault,
  });
}

export function updateAddress(
  addressId: number,
  userId: number,
  data: {
    name?: string;
    phone?: string;
    zipCode?: string;
    address1?: string;
    address2?: string | null;
    isDefault?: boolean;
  },
): UserAddress | null {
  const result = addressRepo.update(addressId, userId, {
    name: data.name,
    phone: data.phone,
    zip_code: data.zipCode,
    address1: data.address1,
    address2: data.address2,
    is_default: data.isDefault,
  });
  return result ?? null;
}

export function deleteAddress(addressId: number, userId: number): boolean {
  return addressRepo.remove(addressId, userId);
}
