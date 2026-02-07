import Link from "next/link";
import {
  emptyWrapper,
  emptyIcon,
  emptyTitle,
  emptyDescription,
  shopButton,
} from "./EmptyCart.css";

export default function EmptyCart() {
  return (
    <div className={emptyWrapper}>
      <svg
        className={emptyIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" x2="21" y1="6" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      <h2 className={emptyTitle}>장바구니가 비어있습니다</h2>
      <p className={emptyDescription}>
        마음에 드는 상품을 담아보세요.
        <br />
        지금 인기 있는 상품들을 확인해 보세요!
      </p>
      <Link href="/" className={shopButton}>
        쇼핑하러 가기
      </Link>
    </div>
  );
}
