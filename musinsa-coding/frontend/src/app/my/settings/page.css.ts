import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const settingsPage = style({
  backgroundColor: vars.color.gray100,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const settingsSection = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.lg} ${vars.space.md}`,
});

export const sectionTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.md,
});

export const fieldGroup = style({
  marginBottom: vars.space.md,
});

export const fieldLabel = style({
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: vars.color.textSecondary,
  marginBottom: vars.space.sm,
});

export const fieldInput = style({
  width: "100%",
  padding: `12px ${vars.space.md}`,
  fontSize: "15px",
  color: vars.color.textPrimary,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  outline: "none",
  transition: "border-color 0.15s",
  ":focus": {
    borderColor: vars.color.black,
  },
});

export const saveButton = style({
  width: "100%",
  padding: "14px 0",
  fontSize: "16px",
  fontWeight: 700,
  color: vars.color.white,
  backgroundColor: vars.color.black,
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: "opacity 0.15s",
  marginTop: vars.space.sm,
  ":hover": {
    opacity: 0.85,
  },
});

export const dangerSection = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.lg} ${vars.space.md}`,
});

export const dangerTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: "#D32F2F",
  marginBottom: vars.space.sm,
});

export const dangerDescription = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
  lineHeight: 1.5,
  marginBottom: vars.space.md,
});

export const dangerButton = style({
  width: "100%",
  padding: "14px 0",
  fontSize: "15px",
  fontWeight: 600,
  color: "#D32F2F",
  backgroundColor: vars.color.white,
  border: "1px solid #D32F2F",
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: "all 0.15s",
  ":hover": {
    backgroundColor: "#FFF5F5",
  },
});

export const modalOverlay = style({
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 200,
  padding: vars.space.md,
});

export const modal = style({
  width: "100%",
  maxWidth: "340px",
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.lg,
  padding: vars.space.lg,
  textAlign: "center",
});

export const modalTitle = style({
  fontSize: "17px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.sm,
});

export const modalDescription = style({
  fontSize: "14px",
  color: vars.color.textSecondary,
  lineHeight: 1.5,
  marginBottom: vars.space.lg,
});

export const modalActions = style({
  display: "flex",
  gap: vars.space.sm,
});

export const modalCancel = style({
  flex: 1,
  padding: "12px 0",
  fontSize: "15px",
  fontWeight: 600,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.gray100,
  borderRadius: vars.radius.md,
  cursor: "pointer",
});

export const modalConfirm = style({
  flex: 1,
  padding: "12px 0",
  fontSize: "15px",
  fontWeight: 600,
  color: vars.color.white,
  backgroundColor: "#D32F2F",
  borderRadius: vars.radius.md,
  cursor: "pointer",
});
