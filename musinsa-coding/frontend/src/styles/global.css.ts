import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  fontFamily: vars.font.body,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  color: vars.color.textPrimary,
  backgroundColor: vars.color.bg,
  fontSize: "14px",
  lineHeight: 1.5,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button", {
  border: "none",
  background: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  fontSize: "inherit",
  color: "inherit",
  padding: 0,
});

globalStyle("ul, ol", {
  listStyle: "none",
});

globalStyle("input", {
  border: "none",
  outline: "none",
  fontFamily: "inherit",
  fontSize: "inherit",
});

globalStyle("img", {
  maxWidth: "100%",
  display: "block",
});
