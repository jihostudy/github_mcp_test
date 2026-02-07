import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const reviewsPage = style({
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
});

export const reviewCount = style({
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

export const reviewList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  padding: vars.space.md,
});
