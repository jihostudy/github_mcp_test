import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const page = style({
  paddingTop: `calc(${vars.headerHeight} + ${vars.tabHeight})`,
  maxWidth: vars.maxWidth,
  margin: "0 auto",
  minHeight: "100vh",
});

export const sectionDivider = style({
  height: "8px",
  backgroundColor: vars.color.gray100,
});
