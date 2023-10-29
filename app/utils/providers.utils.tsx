"use client";
import { FC } from "react";
import CustomThemeProvider from "../contexts/theme.context";
import { SnackbarProvider } from "notistack";

type Props = {
  children: React.ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
  return (
    <CustomThemeProvider>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        {children}
      </SnackbarProvider>
    </CustomThemeProvider>
  );
};

export default Providers;
