"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  ".MuiGrid-item": {
    width: "100%",
    iframe: {
      width: "100%",
      height: "630px",
      border: "none",
      borderRadius: "10px",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
  },
}));

export default StyledWrapper;
