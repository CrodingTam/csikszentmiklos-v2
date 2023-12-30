"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
  backgroundColor: lightTheme.palette.white.main,
  width: "100%",
  height: "500px",
  overflow: "hidden",
  ".description-item": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "30px",
    gap: lightTheme.spacing(7),
    width: "50%",
    "> .MuiBox-root": {
      display: "flex",
      justifyContent: "center",
    },
  },
  ".image-item": {
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
