"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  width: "100%",
  gap: lightTheme.spacing(3),
  justifyContent: "center",
  ".card-item": {
    position: "relative",
    height: "350px",
    width: "32%",
    minWidth: "350px",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: lightTheme.palette.white.main,
    transitionTimingFunction: "ease-in-out",
    transition: "0.2s",
    "&:hover": {
      boxShadow: `0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 0px 4px ${lightTheme.palette.primary.main}`,
    },
    ".background-box": {
      position: "absolute",
      backgroundColor: "red",
      width: "600px",
      height: "400px",
    },
    ".image-box": {
      width: "100%",
      height: "275px",
      img: {
        objectFit: "cover !important",
      },
    },
    ".text-box": {
      display: "flex",
      flexDirection: "column",
      padding: "15px",
      ".subtitle": {
        opacity: 0.8,
      },
    },
  },
}));

export default StyledWrapper;
