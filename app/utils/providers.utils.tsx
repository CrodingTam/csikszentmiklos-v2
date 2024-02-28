"use client";
import { FC } from "react";
import CustomThemeProvider from "../contexts/theme.context";
import { SnackbarProvider } from "notistack";
import { PopupProvider } from "../contexts/popup/popup.context";

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  return (
    <CustomThemeProvider>
      <PopupProvider>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          {children}
        </SnackbarProvider>
      </PopupProvider>
    </CustomThemeProvider>
  );
};

export default Providers;
