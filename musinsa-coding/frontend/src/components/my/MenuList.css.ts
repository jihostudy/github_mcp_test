import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const menuSection = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.sm} 0`,
});

export const menuItem = style({
  display: "flex",
  alignItems: "center",
  padding: `14px ${vars.space.md}`,
  textDecoration: "none",
  color: vars.color.textPrimary,
  gap: vars.space.md,
  transition: "background-color 0.15s",
  ":hover": {
    backgroundColor: vars.color.gray100,
  },
});

export const menuIcon = style({
  width: "22px",
  height: "22px",
  color: vars.color.gray600,
  flexShrink: 0,
});

export const menuLabel = style({
  flex: 1,
  fontSize: "15px",
  fontWeight: 400,
});

export const menuCount = style({
  fontSize: "13px",
  fontWeight: 600,
  color: vars.color.textTertiary,
});

export const menuArrow = style({
  width: "18px",
  height: "18px",
  color: vars.color.gray400,
  flexShrink: 0,
});
