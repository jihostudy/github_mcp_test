import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const likesPage = style({
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
});

export const likeCount = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.md}`,
  fontSize: "14px",
  color: vars.color.textSecondary,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const countBold = style({
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: vars.space.sm,
  padding: vars.space.md,
});

export const productCard = style({
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  overflow: "hidden",
  border: `1px solid ${vars.color.border}`,
});

export const thumbWrapper = style({
  position: "relative",
  width: "100%",
  paddingTop: "130%",
  backgroundColor: vars.color.gray200,
});

export const thumb = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const heartButton = style({
  position: "absolute",
  top: vars.space.sm,
  right: vars.space.sm,
  width: "32px",
  height: "32px",
  borderRadius: vars.radius.full,
  backgroundColor: "rgba(255,255,255,0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  border: "none",
  transition: "transform 0.15s",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const heartIcon = style({
  width: "18px",
  height: "18px",
  color: "#FF0000",
});

export const cardInfo = style({
  padding: `${vars.space.sm} ${vars.space.sm}`,
});

export const brand = style({
  fontSize: "11px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: "2px",
});

export const name = style({
  fontSize: "12px",
  color: vars.color.textSecondary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginBottom: "4px",
});

export const priceRow = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const salePercent = style({
  fontSize: "13px",
  fontWeight: 800,
  color: "#FF0000",
});

export const price = style({
  fontSize: "13px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});
