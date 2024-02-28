"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  ".menu-bar-desktop--grid-item": {
    width: "100%",
  },
}));

export default StyledWrapper;
