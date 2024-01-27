"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
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

const StyledWrapper = styled(Grid)(() => ({
  height: "50px",
  ".arrow-item": {
    position: "relative",
    left: "48%",
    ".MuiBox-root": {
      width: "55px",
      height: "55px",
    },
    ".arrow-box": {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ".MuiSvgIcon-root": {
        width: "40px",
        height: "40px",
      },
    },
    ".arrow-background": {
      background: lightTheme.palette.primary.main,
      opacity: 0.5,
      borderRadius: "50%",
      position: "absolute",
    },
    ".zoomer": {
      animation: `${zoomInAnimation} 3s infinite`,
    },
  },
}));

export default StyledWrapper;
