import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: vars.headerHeight,
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.border}`,
  zIndex: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const headerInner = style({
  width: "100%",
  maxWidth: vars.maxWidth,
  display: "flex",
  alignItems: "center",
  padding: `0 ${vars.space.md}`,
  gap: vars.space.sm,
});

export const logo = style({
  fontWeight: 800,
  fontSize: "20px",
  letterSpacing: "-0.5px",
  color: vars.color.black,
  flexShrink: 0,
  cursor: "pointer",
});

export const searchBar = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.color.gray100,
  borderRadius: vars.radius.md,
  padding: `${vars.space.sm} ${vars.space.md}`,
  gap: vars.space.sm,
  marginLeft: vars.space.sm,
});

export const searchIcon = style({
  width: "18px",
  height: "18px",
  flexShrink: 0,
  color: vars.color.gray500,
});

export const searchInput = style({
  flex: 1,
  backgroundColor: "transparent",
  fontSize: "14px",
  color: vars.color.textPrimary,
  "::placeholder": {
    color: vars.color.textTertiary,
  },
});

export const iconGroup = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  flexShrink: 0,
});

export const iconButton = style({
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.full,
  transition: "background-color 0.15s",
  ":hover": {
    backgroundColor: vars.color.gray100,
  },
});

export const iconSvg = style({
  width: "22px",
  height: "22px",
  color: vars.color.black,
});
