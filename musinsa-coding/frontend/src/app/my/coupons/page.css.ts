import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const couponsPage = style({
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
});

export const tabBar = style({
  display: "flex",
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const tab = style({
  flex: 1,
  padding: `12px 0`,
  fontSize: "14px",
  textAlign: "center",
  color: vars.color.textTertiary,
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  transition: "all 0.15s",
});

export const tabActive = style({
  flex: 1,
  padding: `12px 0`,
  fontSize: "14px",
  fontWeight: 700,
  textAlign: "center",
  color: vars.color.textPrimary,
  cursor: "pointer",
  borderBottom: `2px solid ${vars.color.black}`,
});

export const couponList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  padding: vars.space.md,
});
