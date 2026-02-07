import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const emptyWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space.xxl} ${vars.space.md}`,
  textAlign: "center",
});

export const emptyIcon = style({
  width: "48px",
  height: "48px",
  color: vars.color.gray300,
  marginBottom: vars.space.md,
});

export const emptyTitle = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.textPrimary,
  marginBottom: vars.space.xs,
});

export const emptyDescription = style({
  fontSize: "14px",
  color: vars.color.textTertiary,
  lineHeight: 1.5,
});
