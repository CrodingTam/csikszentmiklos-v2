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
    height: "90px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px",
    height: "80px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "72px",
  },
  ".menu-bar-logo--image": {
    position: "absolute",
    // top: "-50px",
    width: "155px",
    height: "140px",
    cursor: "pointer",
    backgroundColor: theme.palette.background.default,
    borderRadius: "50%",
    boxShadow: "0px 9px 8px -7px rgba(0,0,0,0.45)",
    [theme.breakpoints.down("lg")]: {
      top: "-20px",
      width: "130px",
      height: "130px",
    },
    [theme.breakpoints.down("md")]: {
      top: "-18px",
      width: "120px",
      height: "110px",
      background: "unset",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      top: "-14px",
      width: "100px",
      height: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      top: "-14px",
      width: "95px",
      height: "95px",
    },
  },
}));

export default StyledWrapper;
