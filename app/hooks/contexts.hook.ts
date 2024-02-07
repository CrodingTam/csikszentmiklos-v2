import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";

export const useThemeContext = (): object => {
  return useContext(ThemeContext);
};
