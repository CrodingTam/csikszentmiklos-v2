"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export default StyledWrapper;
