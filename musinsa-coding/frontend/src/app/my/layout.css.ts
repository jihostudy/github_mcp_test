import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const myPageLayout = style({
  maxWidth: vars.maxWidth,
  margin: "0 auto",
  paddingTop: vars.headerHeight,
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
});

export const myPageHeader = style({
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

export const myPageHeaderInner = style({
  width: "100%",
  maxWidth: vars.maxWidth,
  display: "flex",
  alignItems: "center",
  padding: `0 ${vars.space.md}`,
  position: "relative",
});

export const backButton = style({
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

export const backIcon = style({
  width: "22px",
  height: "22px",
  color: vars.color.black,
});

export const headerTitle = style({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.textPrimary,
});
