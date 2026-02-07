"use client";

import { useState } from "react";
import AddressCard from "@/components/my/AddressCard";
import EmptyState from "@/components/my/EmptyState";
import { mockAddresses } from "@/data/mock/addresses";
import type { UserAddress } from "@/types";
import {
  addressesPage,
  addBar,
  addButton,
  addIcon,
  addressList,
} from "./page.css";

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<UserAddress[]>(mockAddresses);

  const handleDelete = (id: number) => {
    if (confirm("이 배송지를 삭제하시겠습니까?")) {
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const handleEdit = (_id: number) => {
    // TODO: 수정 모달/페이지
    alert("배송지 수정 기능은 추후 구현됩니다");
  };

  return (
    <div className={addressesPage}>
      <div className={addBar}>
        <button type="button" className={addButton}>
          <svg
            className={addIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          새 배송지 추가
        </button>
      </div>

      <div className={addressList}>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <EmptyState
            icon="address"
            title="등록된 배송지가 없습니다"
            description="배송지를 추가해보세요"
          />
        )}
      </div>
    </div>
  );
}
