import Link from "next/link";
import {
  benefitBar,
  benefitItem,
  benefitLabel,
  benefitValue,
  divider,
} from "./BenefitSummary.css";

interface Props {
  points: number;
  couponCount: number;
}

export default function BenefitSummary({ points, couponCount }: Props) {
  return (
    <section className={benefitBar}>
      <Link href="/my/coupons" className={benefitItem}>
        <span className={benefitLabel}>쿠폰</span>
        <span className={benefitValue}>{couponCount}장</span>
      </Link>
      <div className={divider} />
      <div className={benefitItem}>
        <span className={benefitLabel}>포인트</span>
        <span className={benefitValue}>
          {points.toLocaleString()}P
        </span>
      </div>
    </section>
  );
}
