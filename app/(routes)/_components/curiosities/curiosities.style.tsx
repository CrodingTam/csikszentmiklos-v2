"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  justifyContent: "space-between",
  height: "180px",
  [theme.breakpoints.down("lg")]: {
    height: "500px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "850px",
  },
  ".curiosities--typography": {
    color: theme.palette.primary.main,
  },
  ".curiosities--grid-item": {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      justifyContent: "flex-start",
    },
    ".curiosities--box:nth-of-type(1)": {
      ".label": {
        fontSize: "24px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
        },
      },
    },
    ".curiosities--box:nth-of-type(2)": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      ".value": {
        fontSize: "80px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "70px",
        },
      },
      ".unit": {
        fontSize: "16px",
      },
    },
  },
}));

export default StyledWrapper;
