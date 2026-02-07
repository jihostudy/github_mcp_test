import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const ordersPage = style({
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
});

export const tabBar = style({
  display: "flex",
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.border}`,
  overflowX: "auto",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const tab = style({
  padding: `12px ${vars.space.md}`,
  fontSize: "14px",
  color: vars.color.textTertiary,
  whiteSpace: "nowrap",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  transition: "all 0.15s",
  flexShrink: 0,
});

export const tabActive = style({
  padding: `12px ${vars.space.md}`,
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  whiteSpace: "nowrap",
  cursor: "pointer",
  borderBottom: `2px solid ${vars.color.black}`,
  flexShrink: 0,
});

export const orderList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  padding: vars.space.md,
});
