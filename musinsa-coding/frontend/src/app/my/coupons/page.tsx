"use client";

import { useState } from "react";
import CouponCard from "@/components/my/CouponCard";
import EmptyState from "@/components/my/EmptyState";
import { mockCoupons } from "@/data/mock/coupons";
import type { Coupon } from "@/types";
import {
  couponsPage,
  tabBar,
  tab,
  tabActive,
  couponList,
} from "./page.css";

type CouponTab = "available" | "used" | "expired";

function isExpired(dateStr: string): boolean {
  return new Date(dateStr) < new Date();
}

function filterCoupons(coupons: Coupon[], activeTab: CouponTab): Coupon[] {
  switch (activeTab) {
    case "available":
      return coupons.filter((c) => !c.usedAt && !isExpired(c.expiresAt));
    case "used":
      return coupons.filter((c) => !!c.usedAt);
    case "expired":
      return coupons.filter((c) => !c.usedAt && isExpired(c.expiresAt));
    default:
      return coupons;
  }
}

const TABS: { key: CouponTab; label: string }[] = [
  { key: "available", label: "사용가능" },
  { key: "used", label: "사용완료" },
  { key: "expired", label: "기간만료" },
];

export default function CouponsPage() {
  const [activeTab, setActiveTab] = useState<CouponTab>("available");
  const filtered = filterCoupons(mockCoupons, activeTab);

  return (
    <div className={couponsPage}>
      <div className={tabBar} role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            className={activeTab === t.key ? tabActive : tab}
            onClick={() => setActiveTab(t.key)}
            role="tab"
            aria-selected={activeTab === t.key}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={couponList}>
        {filtered.length > 0 ? (
          filtered.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))
        ) : (
          <EmptyState
            icon="coupon"
            title={
              activeTab === "available"
                ? "사용 가능한 쿠폰이 없습니다"
                : activeTab === "used"
                  ? "사용 완료된 쿠폰이 없습니다"
                  : "만료된 쿠폰이 없습니다"
            }
          />
        )}
      </div>
    </div>
  );
}
