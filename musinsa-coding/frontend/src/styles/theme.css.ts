import { createGlobalTheme, createVar } from "@vanilla-extract/css";

const createThemeVars = () => ({
  color: {
    black: createVar(),
    white: createVar(),
    gray100: createVar(),
    gray200: createVar(),
    gray300: createVar(),
    gray400: createVar(),
    gray500: createVar(),
    gray600: createVar(),
    gray700: createVar(),
    gray800: createVar(),
    gray900: createVar(),
    red: createVar(),
    primary: createVar(),
    bg: createVar(),
    border: createVar(),
    textPrimary: createVar(),
    textSecondary: createVar(),
    textTertiary: createVar(),
  },
  font: {
    body: createVar(),
  },
  space: {
    xs: createVar(),
    sm: createVar(),
    md: createVar(),
    lg: createVar(),
    xl: createVar(),
    xxl: createVar(),
  },
  radius: {
    sm: createVar(),
    md: createVar(),
    lg: createVar(),
    full: createVar(),
  },
  headerHeight: createVar(),
  tabHeight: createVar(),
  maxWidth: createVar(),
});

export const vars = createThemeVars();

createGlobalTheme(":root", vars, {
  color: {
    black: "#000000",
    white: "#FFFFFF",
    gray100: "#F5F5F5",
    gray200: "#EEEEEE",
    gray300: "#E0E0E0",
    gray400: "#BDBDBD",
    gray500: "#9E9E9E",
    gray600: "#757575",
    gray700: "#616161",
    gray800: "#424242",
    gray900: "#212121",
    red: "#FF0000",
    primary: "#000000",
    bg: "#FFFFFF",
    border: "#EEEEEE",
    textPrimary: "#000000",
    textSecondary: "#616161",
    textTertiary: "#9E9E9E",
  },
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  headerHeight: "56px",
  tabHeight: "44px",
  maxWidth: "640px",
});
