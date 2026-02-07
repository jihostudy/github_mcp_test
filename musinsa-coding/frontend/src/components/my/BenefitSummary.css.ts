import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const benefitBar = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.md}`,
  display: "flex",
  alignItems: "center",
});

export const benefitItem = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.sm,
  textDecoration: "none",
  color: "inherit",
  padding: `${vars.space.sm} 0`,
});

export const benefitLabel = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
});

export const benefitValue = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const divider = style({
  width: "1px",
  height: "28px",
  backgroundColor: vars.color.border,
  flexShrink: 0,
});
