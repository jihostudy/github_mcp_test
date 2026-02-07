import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const profilePage = style({
  backgroundColor: vars.color.white,
  minHeight: "100vh",
});

export const avatarSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `${vars.space.xl} ${vars.space.md}`,
  gap: vars.space.sm,
});

export const avatarWrapper = style({
  position: "relative",
  width: "80px",
  height: "80px",
});

export const avatarCircle = style({
  width: "80px",
  height: "80px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.gray200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const avatarIconLarge = style({
  width: "36px",
  height: "36px",
  color: vars.color.gray500,
});

export const cameraButton = style({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "28px",
  height: "28px",
  borderRadius: vars.radius.full,
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.border}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const cameraIcon = style({
  width: "14px",
  height: "14px",
  color: vars.color.gray600,
});

export const formSection = style({
  padding: `0 ${vars.space.md} ${vars.space.lg}`,
});

export const fieldGroup = style({
  marginBottom: vars.space.lg,
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
  "::placeholder": {
    color: vars.color.textTertiary,
  },
});

export const fieldInputDisabled = style({
  width: "100%",
  padding: `12px ${vars.space.md}`,
  fontSize: "15px",
  color: vars.color.textTertiary,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.gray100,
});

export const genderRow = style({
  display: "flex",
  gap: vars.space.sm,
});

export const genderButton = style({
  flex: 1,
  padding: `10px 0`,
  fontSize: "14px",
  textAlign: "center",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
  color: vars.color.textSecondary,
  cursor: "pointer",
  transition: "all 0.15s",
});

export const genderButtonActive = style({
  flex: 1,
  padding: `10px 0`,
  fontSize: "14px",
  textAlign: "center",
  border: `1px solid ${vars.color.black}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.black,
  color: vars.color.white,
  cursor: "pointer",
  fontWeight: 600,
});

export const submitButton = style({
  width: "100%",
  padding: "14px 0",
  fontSize: "16px",
  fontWeight: 700,
  color: vars.color.white,
  backgroundColor: vars.color.black,
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: "opacity 0.15s",
  marginTop: vars.space.md,
  ":hover": {
    opacity: 0.85,
  },
});
