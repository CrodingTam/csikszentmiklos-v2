"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(AppBar)(({ theme }) => ({
  // boxShadow: "black 0px 2px 5px -5px",
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
      paddingRight: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "4px",
    },
  },
}));

export default StyledWrapper;
