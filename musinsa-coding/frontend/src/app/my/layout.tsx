"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  myPageLayout,
  myPageHeader,
  myPageHeaderInner,
  backButton,
  backIcon,
  headerTitle,
} from "./layout.css";

const PAGE_TITLES: Record<string, string> = {
  "/my": "마이페이지",
  "/my/profile": "프로필 수정",
  "/my/orders": "주문 내역",
  "/my/likes": "좋아요",
  "/my/addresses": "배송지 관리",
  "/my/reviews": "리뷰 관리",
  "/my/coupons": "쿠폰함",
  "/my/settings": "설정",
};

function getPageTitle(pathname: string): string {
  // 정확한 매칭 먼저
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  // 주문 상세 (e.g. /my/orders/123)
  if (pathname.startsWith("/my/orders/")) return "주문 상세";
  return "마이페이지";
}

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRoot = pathname === "/my";
  const title = getPageTitle(pathname);

  return (
    <>
      <header className={myPageHeader}>
        <div className={myPageHeaderInner}>
          {!isRoot && (
            <Link
              href="/my"
              className={backButton}
              aria-label="뒤로 가기"
            >
              <svg
                className={backIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          )}
          <span className={headerTitle}>{title}</span>
        </div>
      </header>
      <main className={myPageLayout}>{children}</main>
    </>
  );
}
