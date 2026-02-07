import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const section = style({
  padding: `0 ${vars.space.md} ${vars.space.xl}`,
});

export const sectionHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: vars.space.md,
});

export const sectionTitle = style({
  fontSize: "18px",
  fontWeight: 800,
  color: vars.color.textPrimary,
});

export const moreLink = style({
  fontSize: "13px",
  color: vars.color.textTertiary,
  display: "flex",
  alignItems: "center",
  gap: "2px",
  ":hover": {
    color: vars.color.textSecondary,
  },
});

export const moreArrow = style({
  width: "14px",
  height: "14px",
});

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: vars.space.md,
  "@media": {
    "(min-width: 640px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});

export const divider = style({
  height: "8px",
  backgroundColor: vars.color.gray100,
  margin: `0 -${vars.space.md}`,
  marginBottom: vars.space.lg,
});
