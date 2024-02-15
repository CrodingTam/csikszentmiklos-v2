"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  // justifyContent: "space-between",
  justifyContent: "space-between",
  alignItems: "center",
  // ".menu-bar-mobile--grid-item:nth-of-type(1)": {},
  // ".menu-bar-mobile--grid-item:nth-of-type(2)": {},
  ".menu-bar-mobile--grid-item": {
    "> .menu-bar-mobile--box": {
      ".menu-bar-mobile--icon-button": {
        color: "black",
        cursor: "pointer",
        padding: "6px",
        ".menu-bar-mobile--icon": {
          width: "35px",
          height: "45px",
        },
      },
    },
  },
}));

export default StyledWrapper;
