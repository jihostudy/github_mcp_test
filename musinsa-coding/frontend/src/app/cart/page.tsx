"use client";

import { useState, useCallback, useMemo } from "react";
import {
  cartPage,
  pageTitle,
  selectBar,
  selectAllArea,
  selectAllCheckbox,
  deleteSelectedButton,
  itemCount,
  cartItemList,
  summaryDivider,
} from "./page.css";
import { stickyBottom, orderButton, orderButtonDisabled } from "@/components/cart/CartSummary.css";
import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { mockCartItems } from "@/data/mock/cart";
import type { CartItem } from "@/types";

function formatPrice(value: number): string {
  return value.toLocaleString("ko-KR") + "원";
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [checkedIds, setCheckedIds] = useState<Set<number>>(
    () => new Set(mockCartItems.map((item) => item.id)),
  );

  const isAllChecked = useMemo(
    () => cartItems.length > 0 && cartItems.every((item) => checkedIds.has(item.id)),
    [cartItems, checkedIds],
  );

  const handleToggleCheck = useCallback((id: number) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const handleToggleAll = useCallback(() => {
    if (isAllChecked) {
      setCheckedIds(new Set());
    } else {
      setCheckedIds(new Set(cartItems.map((item) => item.id)));
    }
  }, [isAllChecked, cartItems]);

  const handleQuantityChange = useCallback((id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  }, []);

  const handleDelete = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    setCheckedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const handleDeleteSelected = useCallback(() => {
    setCartItems((prev) => prev.filter((item) => !checkedIds.has(item.id)));
    setCheckedIds(new Set());
  }, [checkedIds]);

  const selectedCount = useMemo(
    () => cartItems.filter((item) => checkedIds.has(item.id)).length,
    [cartItems, checkedIds],
  );

  const selectedTotal = useMemo(() => {
    return cartItems
      .filter((item) => checkedIds.has(item.id))
      .reduce((sum, item) => {
        const price = item.product.salePrice ?? item.product.price;
        return sum + price * item.quantity;
      }, 0);
  }, [cartItems, checkedIds]);

  if (cartItems.length === 0) {
    return (
      <div className={cartPage}>
        <h1 className={pageTitle}>장바구니</h1>
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className={cartPage}>
      <h1 className={pageTitle}>장바구니</h1>

      {/* 전체 선택 바 */}
      <div className={selectBar}>
        <label className={selectAllArea}>
          <input
            type="checkbox"
            className={selectAllCheckbox}
            checked={isAllChecked}
            onChange={handleToggleAll}
          />
          전체 선택
          <span className={itemCount}>
            ({selectedCount}/{cartItems.length})
          </span>
        </label>
        {selectedCount > 0 && (
          <button className={deleteSelectedButton} onClick={handleDeleteSelected}>
            선택 삭제
          </button>
        )}
      </div>

      {/* 장바구니 아이템 목록 */}
      <ul className={cartItemList}>
        {cartItems.map((item) => (
          <CartItemCard
            key={item.id}
            item={item}
            isChecked={checkedIds.has(item.id)}
            onToggleCheck={handleToggleCheck}
            onQuantityChange={handleQuantityChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      {/* 주문 요약 */}
      <div className={summaryDivider} />
      <CartSummary items={cartItems} checkedIds={checkedIds} />

      {/* 하단 고정 주문하기 버튼 */}
      <div className={stickyBottom}>
        <button
          className={`${orderButton} ${selectedCount === 0 ? orderButtonDisabled : ""}`}
          disabled={selectedCount === 0}
        >
          {selectedCount > 0
            ? `${formatPrice(selectedTotal)} 주문하기`
            : "상품을 선택해주세요"}
        </button>
      </div>
    </div>
  );
}
