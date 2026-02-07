import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const cartPage = style({
  paddingTop: `calc(${vars.headerHeight} + ${vars.tabHeight})`,
  maxWidth: vars.maxWidth,
  margin: "0 auto",
  minHeight: "100vh",
  paddingBottom: "80px",
  backgroundColor: vars.color.white,
});

export const pageTitle = style({
  fontSize: "18px",
  fontWeight: 800,
  color: vars.color.textPrimary,
  padding: `${vars.space.lg} ${vars.space.md} ${vars.space.md}`,
});

export const selectBar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.gray200}`,
  backgroundColor: vars.color.gray100,
});

export const selectAllArea = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  fontSize: "13px",
  fontWeight: 600,
  color: vars.color.textPrimary,
  cursor: "pointer",
});

export const selectAllCheckbox = style({
  width: "18px",
  height: "18px",
  cursor: "pointer",
  accentColor: vars.color.black,
});

export const deleteSelectedButton = style({
  fontSize: "13px",
  color: vars.color.textTertiary,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  transition: "all 0.15s ease",
  ":hover": {
    color: vars.color.red,
    backgroundColor: "rgba(255, 0, 0, 0.05)",
  },
});

export const itemCount = style({
  fontSize: "13px",
  color: vars.color.textTertiary,
  fontWeight: 400,
});

export const cartItemList = style({
  listStyle: "none",
});

export const summaryDivider = style({
  height: "8px",
  backgroundColor: vars.color.gray100,
});
