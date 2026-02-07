import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const dashboard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const section = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.lg} ${vars.space.md}`,
});

export const sectionTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.md,
});
