"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backgroundColor: lightTheme.palette.background.default,
  position: "sticky",
  ".menu-bar--container": {
    maxWidth: "1400px",
    [theme.breakpoints.up("md")]: {
      ".menu-bar-mobile--grid-container": {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      ".menu-bar-desktop--grid-container": {
        display: "none",
      },
    },
  },
}));

export default StyledWrapper;
