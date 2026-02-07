import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const nav = style({
  position: "fixed",
  top: vars.headerHeight,
  left: 0,
  right: 0,
  height: vars.tabHeight,
  backgroundColor: vars.color.white,
  borderBottom: `1px solid ${vars.color.border}`,
  zIndex: 99,
  display: "flex",
  justifyContent: "center",
});

export const navInner = style({
  width: "100%",
  maxWidth: vars.maxWidth,
  display: "flex",
  overflowX: "auto",
  scrollbarWidth: "none",
  selectors: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const tabItem = style({
  position: "relative",
  flex: "0 0 auto",
  padding: `0 ${vars.space.md}`,
  height: vars.tabHeight,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.textTertiary,
  whiteSpace: "nowrap",
  transition: "color 0.2s",
  cursor: "pointer",
  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const tabItemActive = style({
  color: vars.color.black,
  fontWeight: 700,
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: vars.space.md,
      right: vars.space.md,
      height: "2px",
      backgroundColor: vars.color.black,
    },
  },
});
