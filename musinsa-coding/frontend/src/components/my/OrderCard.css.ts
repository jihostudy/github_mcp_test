import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  backgroundColor: vars.color.white,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  overflow: "hidden",
});

export const cardHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space.md}`,
  borderBottom: `1px solid ${vars.color.gray100}`,
});

export const orderDate = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
});

export const orderNumber = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
});

export const statusBadge = style({
  fontSize: "12px",
  fontWeight: 600,
  padding: "4px 8px",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.gray100,
  color: vars.color.textSecondary,
});

export const statusBadgeActive = style({
  fontSize: "12px",
  fontWeight: 600,
  padding: "4px 8px",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.black,
  color: vars.color.white,
});

export const itemRow = style({
  display: "flex",
  gap: vars.space.md,
  padding: vars.space.md,
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  transition: "background-color 0.1s",
  ":hover": {
    backgroundColor: vars.color.gray100,
  },
});

export const itemImage = style({
  width: "64px",
  height: "64px",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.gray200,
  objectFit: "cover",
  flexShrink: 0,
});

export const itemInfo = style({
  flex: 1,
  minWidth: 0,
});

export const itemBrand = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
  marginBottom: "2px",
});

export const itemName = style({
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.textPrimary,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const itemPrice = style({
  fontSize: "14px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginTop: "4px",
});

export const itemQuantity = style({
  fontSize: "12px",
  color: vars.color.textTertiary,
  marginLeft: "4px",
  fontWeight: 400,
});

export const cardFooter = style({
  display: "flex",
  justifyContent: "flex-end",
  padding: `${vars.space.sm} ${vars.space.md}`,
  borderTop: `1px solid ${vars.color.gray100}`,
});

export const totalAmount = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});
