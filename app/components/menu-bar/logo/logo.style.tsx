"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  height: "100%",
  marginTop: "21px",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    marginTop: 0,
  },
  [theme.breakpoints.down("md")]: {
    width: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
  ".menu-bar-logo--image": {
    position: "absolute",
    width: "155px",
    height: "140px",
    cursor: "pointer",
    backgroundColor: theme.palette.background.default,
    borderRadius: "50%",
    boxShadow: "0px 9px 8px -7px rgba(0,0,0,0.45)",
    [theme.breakpoints.down("lg")]: {
      marginTop: "25px",
      width: "130px",
      height: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "110px",
      height: "100px",
    },
  },
}));

export default StyledWrapper;
