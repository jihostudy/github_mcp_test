import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const addressesPage = style({
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
});

export const addBar = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const addButton = style({
  width: "100%",
  padding: "12px 0",
  fontSize: "14px",
  fontWeight: 600,
  color: vars.color.black,
  backgroundColor: vars.color.white,
  border: `1px dashed ${vars.color.gray400}`,
  borderRadius: vars.radius.md,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.xs,
  transition: "all 0.15s",
  ":hover": {
    backgroundColor: vars.color.gray100,
    borderColor: vars.color.black,
  },
});

export const addIcon = style({
  width: "18px",
  height: "18px",
});

export const addressList = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  padding: vars.space.md,
});
