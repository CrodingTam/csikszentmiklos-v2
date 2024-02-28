"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  ".association-item--box:nth-of-type(1)": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
    height: "80px",
    ".mask": {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid",
      backgroundColor: theme.palette.white.main,
      borderColor: theme.palette.primary.main,
      height: "160px",
      width: "160px",
      borderRadius: "50%",
      [theme.breakpoints.down("xl")]: {
        scale: "0.9",
      },
      [theme.breakpoints.down("lg")]: {
        scale: "0.8",
      },
      [theme.breakpoints.down("md")]: {
        scale: "0.7",
      },
    },
  },
  ".association-item--box:nth-of-type(2)": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: theme.palette.white.main,
    height: "400px",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    borderRadius: "10px",
    zIndex: 0,
    padding: "25px",
    paddingTop: "110px",
    [theme.breakpoints.down("xl")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: "90px",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "80px",
    },
    ".description": {
      textAlign: "justify",
      lineHeight: 1.5,
      [theme.breakpoints.down("sm")]: {
        maxHeight: "145px",
        overflowY: "auto",
        paddingRight: "15px",
        "::-webkit-scrollbar": {
          opacity: "1 !important",
          width: "4px",
          backgroundColor: "transparent",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  },
}));

export default StyledWrapper;
