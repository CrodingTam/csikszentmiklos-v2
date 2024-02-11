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
  },
}));

export default StyledWrapper;
