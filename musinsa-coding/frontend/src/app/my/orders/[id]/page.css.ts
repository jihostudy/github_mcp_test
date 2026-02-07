import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const detailPage = style({
  minHeight: "100vh",
  backgroundColor: vars.color.gray100,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
});

export const section = style({
  backgroundColor: vars.color.white,
  padding: `${vars.space.lg} ${vars.space.md}`,
});

export const sectionTitle = style({
  fontSize: "15px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  marginBottom: vars.space.md,
});

export const statusRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: vars.space.md,
});

export const statusBadgeLarge = style({
  fontSize: "14px",
  fontWeight: 700,
  padding: "6px 12px",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.black,
  color: vars.color.white,
});

export const orderMeta = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
});

export const itemCard = style({
  display: "flex",
  gap: vars.space.md,
  padding: `${vars.space.md} 0`,
  borderBottom: `1px solid ${vars.color.gray100}`,
  alignItems: "center",
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
});

export const itemThumb = style({
  width: "72px",
  height: "72px",
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.gray200,
  objectFit: "cover",
  flexShrink: 0,
});

export const itemDetail = style({
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
});

export const itemMeta = style({
  fontSize: "13px",
  color: vars.color.textSecondary,
  marginTop: "4px",
});

export const itemPriceBold = style({
  fontWeight: 700,
  color: vars.color.textPrimary,
});

export const summaryTable = style({
  width: "100%",
});

export const summaryRow = style({
  display: "flex",
  justifyContent: "space-between",
  padding: `${vars.space.sm} 0`,
  fontSize: "14px",
  color: vars.color.textSecondary,
});

export const summaryTotal = style({
  display: "flex",
  justifyContent: "space-between",
  padding: `${vars.space.md} 0`,
  fontSize: "16px",
  fontWeight: 700,
  color: vars.color.textPrimary,
  borderTop: `1px solid ${vars.color.border}`,
  marginTop: vars.space.sm,
});
