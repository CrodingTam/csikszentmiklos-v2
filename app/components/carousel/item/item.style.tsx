"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  borderRadius: "10px",
  borderColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",
  height: "500px",
  [theme.breakpoints.down("lg")]: {
    height: "450px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "400px",
  },
  ".carousel-item--box:nth-of-type(1)": {
    position: "relative",
    zIndex: 1,
    ".carousel-item--box": {
      position: "absolute",
      backgroundColor: theme.palette.white.main,
      color: theme.palette.black.main,
      left: "20px",
      top: "20px",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  ".carousel-item--box:nth-of-type(2)": {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    img: {
      objectFit: "cover !important",
    },
  },
  ".carousel-item--box:nth-of-type(3)": {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    ".carousel-item--box": {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      justifyContent: "center",
      padding: "25px",
      position: "absolute",
      width: "80%",
      height: "60px",
      bottom: "10px",
      borderRadius: "10px",
      backgroundColor: theme.palette.white.main,
      color: theme.palette.black.main,
      textAlign: "left",
      ".description": {
        textAlign: "justify",
      },
      ".more-content": {
        opacity: 0.8,
      },
    },
  },
}));

export default StyledWrapper;
