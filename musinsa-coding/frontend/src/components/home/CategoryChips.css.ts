import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = style({
  padding: `${vars.space.lg} ${vars.space.md}`,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: vars.space.md,
  "@media": {
    "(min-width: 640px)": {
      gridTemplateColumns: "repeat(10, 1fr)",
    },
  },
});

export const chipItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.xs,
  cursor: "pointer",
});

export const chipIcon = style({
  width: "48px",
  height: "48px",
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.gray100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "11px",
  fontWeight: 700,
  color: vars.color.gray700,
  transition: "background-color 0.15s",
  ":hover": {
    backgroundColor: vars.color.gray200,
  },
  "@media": {
    "(min-width: 640px)": {
      width: "52px",
      height: "52px",
    },
  },
});

export const chipLabel = style({
  fontSize: "11px",
  color: vars.color.textSecondary,
  textAlign: "center",
  lineHeight: 1.3,
  "@media": {
    "(min-width: 640px)": {
      fontSize: "12px",
    },
  },
});
