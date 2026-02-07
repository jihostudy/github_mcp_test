import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const statusBar = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.lg} ${vars.space.md}`,
});

export const statusTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.md,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const viewAll = style({
  fontSize: "13px",
  fontWeight: 400,
  color: vars.color.textTertiary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  ":hover": {
    color: vars.color.textSecondary,
  },
});

export const statusGrid = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const statusItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.xs,
  textDecoration: "none",
  color: "inherit",
  padding: `${vars.space.sm} 0`,
  minWidth: "56px",
});

export const statusCount = style({
  fontSize: "20px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  lineHeight: 1,
});

export const statusCountActive = style({
  fontSize: "20px",
  fontWeight: 700,
  color: "#FF0000",
  lineHeight: 1,
});

export const statusLabel = style({
  fontSize: "11px",
  color: vars.color.textSecondary,
  whiteSpace: "nowrap",
});

export const statusArrow = style({
  width: "12px",
  height: "12px",
  color: vars.color.gray300,
  flexShrink: 0,
});
