"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  width: "175px",
  height: "100px",
  [theme.breakpoints.down("lg")]: {
    width: "100px",
    height: "95px",
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
    top: "-30px",
    width: "155px",
    height: "155px",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
      top: "-20px",
      width: "130px",
      height: "130px",
    },
    [theme.breakpoints.down("md")]: {
      top: "-18px",
      width: "120px",
      height: "120px",
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
