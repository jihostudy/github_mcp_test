import type { Coupon } from "@/types";
import {
  couponCard,
  couponCardUsed,
  discountArea,
  discountValue,
  discountUnit,
  couponInfo,
  couponName,
  couponCondition,
  couponExpiry,
  usedLabel,
} from "./CouponCard.css";

interface Props {
  coupon: Coupon;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

function isExpired(dateStr: string): boolean {
  return new Date(dateStr) < new Date();
}

export default function CouponCard({ coupon }: Props) {
  const used = !!coupon.usedAt;
  const expired = isExpired(coupon.expiresAt);
  const inactive = used || expired;

  return (
    <article className={inactive ? couponCardUsed : couponCard}>
      <div className={discountArea}>
        <span className={discountValue}>
          {coupon.discountType === "percent"
            ? coupon.discountValue
            : coupon.discountValue.toLocaleString()}
        </span>
        <span className={discountUnit}>
          {coupon.discountType === "percent" ? "%" : "원"}
        </span>
      </div>

      <div className={couponInfo}>
        <div className={couponName}>{coupon.name}</div>
        <div className={couponCondition}>
          {coupon.minOrderAmount > 0
            ? `${coupon.minOrderAmount.toLocaleString()}원 이상 구매 시`
            : "조건 없음"}
          {coupon.maxDiscount &&
            coupon.discountType === "percent" &&
            ` (최대 ${coupon.maxDiscount.toLocaleString()}원)`}
        </div>
        <div className={couponExpiry}>
          {used ? (
            <span className={usedLabel}>
              사용완료 ({formatDate(coupon.usedAt!)})
            </span>
          ) : expired ? (
            <span className={usedLabel}>기간 만료</span>
          ) : (
            `~ ${formatDate(coupon.expiresAt)}`
          )}
        </div>
      </div>
    </article>
  );
}
