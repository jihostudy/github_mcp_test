import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const summaryWrapper = style({
  padding: `${vars.space.lg} ${vars.space.md}`,
  backgroundColor: vars.color.white,
});

export const summaryTitle = style({
  fontSize: "16px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.md,
  paddingBottom: vars.space.sm,
  borderBottom: `1px solid ${vars.color.gray200}`,
});

export const summaryRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.sm} 0`,
  fontSize: "14px",
  color: vars.color.textSecondary,
});

export const summaryLabel = style({
  color: vars.color.textSecondary,
});

export const summaryValue = style({
  fontWeight: 600,
  color: vars.color.textPrimary,
});

export const discountValue = style({
  fontWeight: 600,
  color: vars.color.red,
});

export const freeShippingBadge = style({
  fontSize: "11px",
  fontWeight: 600,
  color: vars.color.primary,
  backgroundColor: vars.color.gray100,
  padding: "2px 6px",
  borderRadius: vars.radius.sm,
  marginLeft: vars.space.xs,
});

export const divider = style({
  height: "1px",
  backgroundColor: vars.color.gray200,
  margin: `${vars.space.sm} 0`,
});

export const totalRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: `${vars.space.md} 0 ${vars.space.xs}`,
});

export const totalLabel = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const totalValue = style({
  fontSize: "20px",
  fontWeight: 800,
  color: vars.color.textPrimary,
});

export const stickyBottom = style({
  position: "sticky",
  bottom: 0,
  left: 0,
  right: 0,
  padding: `${vars.space.md}`,
  backgroundColor: vars.color.white,
  borderTop: `1px solid ${vars.color.gray200}`,
  zIndex: 10,
});

export const orderButton = style({
  width: "100%",
  height: "52px",
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.black,
  color: vars.color.white,
  fontSize: "16px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.sm,
  transition: "all 0.2s ease",
  ":hover": {
    opacity: 0.85,
    transform: "translateY(-1px)",
  },
  ":active": {
    transform: "translateY(0)",
    opacity: 0.75,
  },
});

export const orderButtonDisabled = style({
  backgroundColor: vars.color.gray300,
  color: vars.color.gray500,
  cursor: "not-allowed",
  ":hover": {
    opacity: 1,
    transform: "none",
  },
  ":active": {
    transform: "none",
    opacity: 1,
  },
});
