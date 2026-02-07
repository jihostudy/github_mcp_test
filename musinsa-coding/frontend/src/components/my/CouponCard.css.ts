import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const couponCard = style({
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  overflow: "hidden",
  display: "flex",
});

export const couponCardUsed = style({
  backgroundColor: vars.color.gray100,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  overflow: "hidden",
  display: "flex",
  opacity: 0.5,
});

export const discountArea = style({
  width: "96px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space.md,
  borderRight: `1px dashed ${vars.color.gray300}`,
  flexShrink: 0,
});

export const discountValue = style({
  fontSize: "22px",
  fontWeight: 800,
  color: "#FF0000",
  lineHeight: 1,
});

export const discountUnit = style({
  fontSize: "13px",
  fontWeight: 600,
  color: "#FF0000",
  marginTop: "2px",
});

export const couponInfo = style({
  flex: 1,
  padding: `${vars.space.md}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "4px",
});

export const couponName = style({
  fontSize: "14px",
  fontWeight: 600,
  color: vars.color.textPrimary,
  lineHeight: 1.3,
});

export const couponCondition = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
});

export const couponExpiry = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
});

export const usedLabel = style({
  fontSize: "12px",
  fontWeight: 600,
  color: vars.color.textTertiary,
});
