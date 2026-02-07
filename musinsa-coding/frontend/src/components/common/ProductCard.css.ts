import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  transition: "transform 0.15s",
  ":hover": {
    transform: "translateY(-2px)",
  },
});

export const thumbnailWrapper = style({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1.2",
  backgroundColor: vars.color.gray200,
  borderRadius: vars.radius.md,
  overflow: "hidden",
  marginBottom: vars.space.sm,
});

export const thumbnailPlaceholder = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.gray400,
  fontSize: "12px",
  fontWeight: 500,
});

export const likeButton = style({
  position: "absolute",
  bottom: vars.space.sm,
  right: vars.space.sm,
  width: "28px",
  height: "28px",
  borderRadius: vars.radius.full,
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.15s",
  ":hover": {
    backgroundColor: vars.color.white,
  },
});

export const likeIcon = style({
  width: "16px",
  height: "16px",
  color: vars.color.gray500,
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  padding: `0 ${vars.space.xs}`,
});

export const brandName = style({
  fontSize: "12px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  lineHeight: 1.3,
});

export const productName = style({
  fontSize: "12px",
  color: vars.color.textSecondary,
  lineHeight: 1.4,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const priceRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  marginTop: "2px",
});

export const discountRate = style({
  fontSize: "14px",
  fontWeight: 800,
  color: vars.color.red,
});

export const salePrice = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const originalPrice = style({
  fontSize: "11px",
  color: vars.color.textTertiary,
  textDecoration: "line-through",
});

export const metaRow = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  marginTop: "4px",
});

export const reviewCount = style({
  fontSize: "11px",
  color: vars.color.textTertiary,
});
