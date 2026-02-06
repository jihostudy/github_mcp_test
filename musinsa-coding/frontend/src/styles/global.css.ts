import { globalStyle } from "@vanilla-extract/css";

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
  fontFamily: "system-ui, -apple-system, sans-serif",
  WebkitFontSmoothing: "antialiased",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
