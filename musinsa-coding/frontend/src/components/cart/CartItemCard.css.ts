import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const cartItemWrapper = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.space.md,
  padding: `${vars.space.lg} ${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.gray200}`,
  transition: "background-color 0.2s ease",
  ":hover": {
    backgroundColor: vars.color.gray100,
  },
});

export const checkboxWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "2px",
  flexShrink: 0,
});

export const checkbox = style({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  accentColor: vars.color.black,
});

export const thumbnailBox = style({
  width: "85px",
  height: "85px",
  backgroundColor: vars.color.gray200,
  borderRadius: vars.radius.md,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 600,
  color: vars.color.gray500,
  overflow: "hidden",
});

export const itemInfo = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  minWidth: 0,
});

export const brandText = style({
  fontSize: "12px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  lineHeight: 1.3,
});

export const nameText = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
  lineHeight: 1.4,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const optionText = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
  marginBottom: "4px",
});

export const priceArea = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  marginTop: "2px",
});

export const discountBadge = style({
  fontSize: "13px",
  fontWeight: 800,
  color: vars.color.red,
});

export const currentPrice = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const originalPriceText = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
  textDecoration: "line-through",
});

export const quantityControl = style({
  display: "flex",
  alignItems: "center",
  gap: 0,
  marginTop: vars.space.sm,
  border: `1px solid ${vars.color.gray300}`,
  borderRadius: vars.radius.sm,
  overflow: "hidden",
  width: "fit-content",
});

export const quantityButton = style({
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  color: vars.color.textSecondary,
  transition: "all 0.15s ease",
  backgroundColor: "transparent",
  ":hover": {
    backgroundColor: vars.color.gray200,
    color: vars.color.textPrimary,
  },
  ":active": {
    transform: "scale(0.92)",
  },
});

export const quantityButtonDisabled = style({
  opacity: 0.3,
  cursor: "not-allowed",
  ":hover": {
    backgroundColor: "transparent",
  },
  ":active": {
    transform: "none",
  },
});

export const quantityValue = style({
  width: "36px",
  textAlign: "center",
  fontSize: "13px",
  fontWeight: 600,
  color: vars.color.textPrimary,
  borderLeft: `1px solid ${vars.color.gray300}`,
  borderRight: `1px solid ${vars.color.gray300}`,
  lineHeight: "30px",
});

export const deleteButton = style({
  flexShrink: 0,
  width: "28px",
  height: "28px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.full,
  transition: "all 0.15s ease",
  color: vars.color.gray400,
  ":hover": {
    backgroundColor: vars.color.gray200,
    color: vars.color.textPrimary,
  },
});

export const deleteIcon = style({
  width: "16px",
  height: "16px",
});
