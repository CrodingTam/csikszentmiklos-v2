"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  backgroundColor: lightTheme.palette.white.main,
  borderRadius: "10px",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  overflow: "hidden",
  padding: "50px",
  flexDirection: "row",
  ".MuiGrid-item": {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default StyledWrapper;
