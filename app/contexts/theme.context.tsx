import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { Dispatch, FC, SetStateAction, createContext, useEffect, useState } from "react";
import { getActiveTheme, lightTheme } from "../utils/theme.utils";

interface ThemeContextType {
  activeTheme: Theme | null;
  setActiveTheme: Dispatch<SetStateAction<Theme | null>>;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type Props = {
  children: React.ReactNode;
};

const CustomThemeProvider: FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme | null>(lightTheme);

  const themeContextValue: ThemeContextType = {
    activeTheme,
    setActiveTheme,
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("activeTheme");
    const isSavedTheme = storageTheme === "light" || storageTheme === "dark";
    setActiveTheme(isSavedTheme ? getActiveTheme(storageTheme) : lightTheme);
  }, []);

  useEffect(() => {
    if (activeTheme) {
      localStorage.setItem("activeTheme", activeTheme.palette.mode);
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {activeTheme && (
        <ThemeProvider theme={activeTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      )}
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
