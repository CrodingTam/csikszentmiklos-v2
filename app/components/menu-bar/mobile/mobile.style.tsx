"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  justifyContent: "space-between",
  alignItems: "center",
  ".menu-bar-mobile--grid-item:nth-of-type(1)": {},
  ".menu-bar-mobile--grid-item:nth-of-type(2)": {
    ".menu-bar-mobile--icon-button": {
      color: "black",
      cursor: "pointer",
      ".menu-bar-mobile--menu-icon": {
        width: "50px",
        height: "50px",
      },
    },
  },
}));

export default StyledWrapper;
