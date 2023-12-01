"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  alignItems: "center",
  ".logo-holder": {},
  ".menu-items-holder": {},
}));

export default StyledWrapper;
