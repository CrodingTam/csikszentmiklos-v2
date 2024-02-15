"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
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
        [theme.breakpoints.down("sm")]: {
          width: "40px",
          height: "40px",
        },
      },
    },
  },
}));

export default StyledWrapper;
