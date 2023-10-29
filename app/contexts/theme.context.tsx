import { Theme } from "@mui/material";
import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  activeTheme: Theme | null;
  setActiveTheme: Dispatch<SetStateAction<Theme | null>>;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

type Props = {
  children: React.ReactNode;
};

const CustomThemeProvider: FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<Theme | null>(null);

  const themeContextValue: ThemeContextType = {
    activeTheme,
    setActiveTheme,
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("activeTheme");
    const isSavedTheme = storageTheme === "light" || storageTheme === "dark";
    // setActiveTheme(isSavedTheme ? getActiveTheme(storageTheme) : darkTheme);
  }, []);

  useEffect(() => {
    if (activeTheme) {
      // localStorage.setItem("activeTheme", )
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
