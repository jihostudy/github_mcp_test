import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const emptyWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space.xxl} ${vars.space.md}`,
  minHeight: "400px",
  gap: vars.space.md,
});

export const emptyIcon = style({
  width: "64px",
  height: "64px",
  color: vars.color.gray300,
  marginBottom: vars.space.sm,
});

export const emptyTitle = style({
  fontSize: "18px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const emptyDescription = style({
  fontSize: "14px",
  color: vars.color.textTertiary,
  textAlign: "center",
  lineHeight: 1.6,
});

export const shopButton = style({
  marginTop: vars.space.md,
  padding: `${vars.space.sm} ${vars.space.xl}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.black,
  color: vars.color.white,
  fontSize: "14px",
  fontWeight: 600,
  transition: "all 0.2s ease",
  textDecoration: "none",
  ":hover": {
    opacity: 0.85,
    transform: "translateY(-1px)",
  },
  ":active": {
    transform: "translateY(0)",
  },
});
