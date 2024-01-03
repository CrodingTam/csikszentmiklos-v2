"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  justifyContent: "space-between",
  gap: "40px",
  ".MuiTypography-root": {
    color: lightTheme.palette.primary.main,
    width: "200px",
  },
  ".curiosity-item": {
    textAlign: "center",
  },
  ".curiosity-box": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  ".curiosity-label": {
    fontSize: "24px",
  },
  ".curiosity-value": {
    fontSize: "80px",
  },
  ".curiosity-unit": {
    fontSize: "16px",
  },
}));

export default StyledWrapper;
