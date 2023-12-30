"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  marginTop: "120px",
  marginBottom: "60px",
  width: "100%",
  justifyContent: "center",
  ".title-item": {
    textAlign: "center",
  },
}));

export default StyledWrapper;
