import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const profileSection = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.lg} ${vars.space.md}`,
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
});

export const avatar = style({
  width: "56px",
  height: "56px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.gray200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  overflow: "hidden",
});

export const avatarIcon = style({
  width: "28px",
  height: "28px",
  color: vars.color.gray500,
});

export const avatarImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const info = style({
  flex: 1,
  minWidth: 0,
});

export const nickname = style({
  fontSize: "18px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: "2px",
});

export const gradeBadge = style({
  display: "inline-block",
  fontSize: "11px",
  fontWeight: 600,
  color: vars.color.white,
  backgroundColor: vars.color.black,
  padding: "2px 8px",
  borderRadius: vars.radius.sm,
  marginTop: "4px",
});

export const editLink = style({
  fontSize: "13px",
  color: vars.color.textTertiary,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  flexShrink: 0,
  ":hover": {
    color: vars.color.textSecondary,
  },
});

export const chevronIcon = style({
  width: "16px",
  height: "16px",
});
