import { Theme, ThemeOptions } from "@mui/material/styles/createTheme";
import { createTheme } from "@mui/material/styles/";
import { Custom } from "./palette.util";
import { customVariant } from "./typography.util";
import { customBreakpoints } from "./breakpoints.utils";

const standardThemeConfig: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#bf6d33",
    },
    secondary: {
      main: "#cfd8d3",
    },
    background: {
      // #eeddd3
      default: "#ffefe5",
    },
    white: {
      main: "#ffffff",
    } as Custom,
    black: {
      main: "#000000",
    } as Custom,
  },
  typography: customVariant,
  breakpoints: {
    values: customBreakpoints,
  },
};

const lightTheme = createTheme({
  ...standardThemeConfig,
});

const darkTheme = createTheme({
  ...standardThemeConfig,
});

const getActiveTheme = (themeMode: "light" | "dark" = "light"): Theme => {
  return themeMode === "light" ? lightTheme : darkTheme;
};

export { lightTheme, darkTheme, getActiveTheme };
