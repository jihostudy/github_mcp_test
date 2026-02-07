import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const reviewCard = style({
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  padding: vars.space.md,
});

export const productRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  marginBottom: vars.space.md,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.gray100}`,
});

export const productThumb = style({
  width: "48px",
  height: "48px",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.gray200,
  objectFit: "cover",
  flexShrink: 0,
});

export const productInfo = style({
  flex: 1,
  minWidth: 0,
});

export const productBrand = style({
  fontSize: "11px",
  color: vars.color.textTertiary,
});

export const productName = style({
  fontSize: "13px",
  fontWeight: 500,
  color: vars.color.textPrimary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const starRow = style({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  marginBottom: vars.space.sm,
});

export const star = style({
  width: "14px",
  height: "14px",
});

export const starFilled = style({
  color: "#FFC107",
});

export const starEmpty = style({
  color: vars.color.gray300,
});

export const reviewContent = style({
  fontSize: "14px",
  color: vars.color.textPrimary,
  lineHeight: 1.6,
  marginBottom: vars.space.sm,
});

export const reviewDate = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
});

export const reviewActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space.sm,
  marginTop: vars.space.sm,
});

export const actionButton = style({
  fontSize: "13px",
  color: vars.color.textTertiary,
  cursor: "pointer",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  transition: "all 0.15s",
  ":hover": {
    color: vars.color.textPrimary,
    backgroundColor: vars.color.gray100,
  },
});
