"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  width: "100%",
  justifyContent: "space-between",
  ".card-item": {
    width: "50%",
    padding: "10px",
    ".card-box": {
      height: "500px",
      padding: "15px",
      width: "100%",
      position: "relative",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      borderRadius: "10px",
      overflow: "hidden",
      cursor: "pointer",
      backgroundColor: lightTheme.palette.white.main,
      transitionTimingFunction: "ease-in-out",
      transition: "0.2s",
      opacity: 0.9,
      "&:hover": {
        // boxShadow: `0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 0px 4px ${lightTheme.palette.primary.main}`,
        opacity: 1,
        transform: "scale(1.03)",
      },
      ".image-box": {
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        img: {
          objectFit: "cover !important",
        },
      },
      ".text-box": {
        display: "flex",
        flexDirection: "column",
        marginTop: "15px",
        marginLeft: "5px",
        ".title": {
          fontSize: "20px",
        },
        ".subtitle": {
          opacity: 0.8,
        },
      },
    },
  },
}));

export default StyledWrapper;
