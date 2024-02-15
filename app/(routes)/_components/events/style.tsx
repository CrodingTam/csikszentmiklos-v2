"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  flexDirection: "column",
  ".title-item": {
    textAlign: "center",
    ".MuiTypography-root": {},
  },
}));

export default StyledWrapper;
