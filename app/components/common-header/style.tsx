"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  marginTop: "120px",
  marginBottom: "50px",
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: "80px",
    marginBottom: "40px",
  },
  ".title-item": {
    textAlign: "center",
  },
}));

export default StyledWrapper;
