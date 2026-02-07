import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const footer = style({
  backgroundColor: vars.color.gray100,
  borderTop: `1px solid ${vars.color.border}`,
  padding: `${vars.space.xl} ${vars.space.md}`,
});

export const footerInner = style({
  maxWidth: vars.maxWidth,
  margin: "0 auto",
});

export const csSection = style({
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.gray300}`,
});

export const csTitle = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.sm,
});

export const csPhone = style({
  fontSize: "22px",
  fontWeight: 800,
  color: vars.color.textPrimary,
  marginBottom: vars.space.xs,
});

export const csTime = style({
  fontSize: "12px",
  color: vars.color.textSecondary,
  lineHeight: 1.6,
});

export const linkGroups = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.md,
  marginBottom: vars.space.lg,
  paddingBottom: vars.space.lg,
  borderBottom: `1px solid ${vars.color.gray300}`,
});

export const linkGroup = style({
  minWidth: "120px",
});

export const linkGroupTitle = style({
  fontSize: "12px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.sm,
});

export const linkItem = style({
  display: "block",
  fontSize: "12px",
  color: vars.color.textSecondary,
  lineHeight: 2,
  ":hover": {
    color: vars.color.textPrimary,
  },
});

export const snsRow = style({
  display: "flex",
  gap: vars.space.sm,
  marginBottom: vars.space.lg,
});

export const snsIcon = style({
  width: "32px",
  height: "32px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.gray300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "10px",
  fontWeight: 700,
  color: vars.color.gray600,
  transition: "background-color 0.15s",
  ":hover": {
    backgroundColor: vars.color.gray400,
  },
});

export const companyInfo = style({
  fontSize: "11px",
  color: vars.color.textTertiary,
  lineHeight: 1.8,
});

export const copyright = style({
  fontSize: "11px",
  color: vars.color.textTertiary,
  marginTop: vars.space.md,
});
