"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  flexDirection: "column",
  ".banner-header--grid-item": {
    width: "100%",
    ".banner-header-image": {
      position: "relative",
      width: "100%",
      height: "94vh",
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to left, rgba(255,255,255,0), rgba(0,0,0,0.8))",
        backgroundSize: "60%",
        backgroundRepeat: "no-repeat",
      },
      img: {
        objectFit: "cover !important",
        objectPosition: "center !important",
      },
    },
  },
  ".banner-header--box": {
    display: "flex",
    justifyContent: "center",
    maxWidth: "1400px",
    "> .banner-header--box": {
      position: "absolute",
      display: "flex",
      width: "100%",
      zIndex: "1",
      "> .banner-header--box": {
        gap: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        height: "94vh",
        width: "fit-content",
        left: "0",
        right: "0",
        alignItems: "center",
        paddingLeft: "24px",
        ".banner-header--typography": {
          fontSize: "40px",
          lineHeight: "40px",
          width: "100%",
          zIndex: 10,
          color: theme.palette.white.main,
          textAlign: "left",
          [theme.breakpoints.down("lg")]: {
            fontSize: "30px",
            lineHeight: "30px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "25px",
            lineHeight: "25px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "20x",
            lineHeight: "20px",
          },
        },
        ".title": {
          fontSize: "55px",
          lineHeight: "55px",
          letterSpacing: "0px",
          [theme.breakpoints.down("lg")]: {
            fontSize: "45px",
            lineHeight: "45px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "40px",
            lineHeight: "40px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
            lineHeight: "30px",
          },
          [theme.breakpoints.down("xs")]: {
            fontSize: "25px",
            lineHeight: "25px",
          },
        },
      },
    },
  },
}));

export default StyledWrapper;
