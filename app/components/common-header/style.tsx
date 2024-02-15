"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  marginTop: "120px",
  marginBottom: "50px",
  width: "100%",
  justifyContent: "center",
  ".title-item": {
    textAlign: "center",
  },
}));

export default StyledWrapper;
