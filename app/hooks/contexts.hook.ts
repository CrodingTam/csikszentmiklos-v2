import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

export const useThemeContext = (): object => {
  return useContext(ThemeContext);
};
