import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const addressCard = style({
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  padding: vars.space.md,
});

export const cardTop = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.sm,
  marginBottom: vars.space.sm,
});

export const addressName = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const defaultBadge = style({
  fontSize: "11px",
  fontWeight: 600,
  color: vars.color.white,
  backgroundColor: vars.color.black,
  padding: "2px 6px",
  borderRadius: vars.radius.sm,
});

export const addressPhone = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
  marginBottom: "4px",
});

export const addressText = style({
  fontSize: "14px",
  color: vars.color.textPrimary,
  lineHeight: 1.5,
});

export const addressZip = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
  marginLeft: "4px",
});

export const cardActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space.sm,
  marginTop: vars.space.md,
  paddingTop: vars.space.sm,
  borderTop: `1px solid ${vars.color.gray100}`,
});

export const actionBtn = style({
  fontSize: "13px",
  color: vars.color.textTertiary,
  cursor: "pointer",
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.sm,
  transition: "all 0.15s",
  ":hover": {
    color: vars.color.textPrimary,
    backgroundColor: vars.color.gray100,
  },
});
