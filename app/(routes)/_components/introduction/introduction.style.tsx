"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  borderRadius: "10px",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  backgroundColor: lightTheme.palette.white.main,
  width: "100%",
  height: "500px",
  overflow: "hidden",
  ".introduction--grid-item:nth-of-type(1)": {
    ".introduction--box": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "30px",
      gap: lightTheme.spacing(7),
      ".introduction--typography": {
        textAlign: "center",
      },
      ".description": {
        textAlign: "left",
      },
      "> .MuiBox-root": {
        display: "flex",
        justifyContent: "center",
      },
    },
  },
  ".introduction--grid-item:nth-of-type(2)": {
    width: "50%",
    ".MuiBox-root": {
      width: "100%",
      height: "100%",
      img: {
        objectFit: "cover !important",
      },
    },
  },
}));

export default StyledWrapper;
