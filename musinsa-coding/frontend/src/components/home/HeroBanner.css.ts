import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const wrapper = style({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  touchAction: "pan-y",
});

export const track = style({
  display: "flex",
  transition: "transform 0.4s ease",
});

export const slide = style({
  flex: "0 0 100%",
  width: "100%",
  aspectRatio: "16 / 9",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space.lg,
  color: vars.color.white,
  userSelect: "none",
});

export const slideTitle = style({
  fontSize: "24px",
  fontWeight: 800,
  letterSpacing: "-0.5px",
  marginBottom: vars.space.sm,
  "@media": {
    "(min-width: 640px)": {
      fontSize: "32px",
    },
  },
});

export const slideSubtitle = style({
  fontSize: "14px",
  fontWeight: 400,
  opacity: 0.85,
  "@media": {
    "(min-width: 640px)": {
      fontSize: "16px",
    },
  },
});

export const indicators = style({
  position: "absolute",
  bottom: vars.space.md,
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "6px",
});

export const dot = style({
  width: "6px",
  height: "6px",
  borderRadius: vars.radius.full,
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  transition: "all 0.3s",
  cursor: "pointer",
  border: "none",
  padding: 0,
});

export const dotActive = style({
  width: "18px",
  backgroundColor: vars.color.white,
});

export const counter = style({
  position: "absolute",
  bottom: vars.space.md,
  right: vars.space.md,
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: vars.color.white,
  fontSize: "11px",
  padding: "2px 8px",
  borderRadius: vars.radius.full,
});
