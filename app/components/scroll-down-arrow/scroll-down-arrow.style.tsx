"use client";

import { Box } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";

const zoomInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale3d(.4, .4, .4);
  }

  50% {
    opacity: 0.5;
  }
  
  100% {
    opacity: 0;
  }
`;

const StyledWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  ".scroll-down-arrow--box": {
    width: "70px",
    height: "70px",
    [theme.breakpoints.down("lg")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("md")]: {
      width: "50px",
      height: "50px",
    },
  },
  ".scroll-down-arrow--box:nth-of-type(1)": {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: "20px",
    backgroundColor: theme.palette.white.main,
    borderRadius: "50%",
    ".MuiSvgIcon-root": {
      width: "60px",
      height: "60px",
      [theme.breakpoints.down("md")]: {
        width: "50px",
        height: "50px",
      },
    },
  },
  ".scroll-down-arrow--box:nth-of-type(2)": {
    background: theme.palette.primary.main,
    opacity: 0.5,
    borderRadius: "50%",
    position: "absolute",
    bottom: "20px",
  },
  ".zoomer": {
    animation: `${zoomInAnimation} 3s infinite`,
  },
}));

export default StyledWrapper;
