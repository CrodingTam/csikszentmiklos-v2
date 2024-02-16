import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";
import { PopupContext } from "../contexts/popup/popup.context";

export const useThemeContext = (): object => {
  return useContext(ThemeContext);
};

export const usePopupContext = () => {
  return useContext(PopupContext);
};
