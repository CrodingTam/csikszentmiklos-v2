"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  flexDirection: "column",
  gap: lightTheme.spacing(2.5),
  ".MuiGrid-item": {
    cursor: "pointer",
    ".MuiTypography-root": {
      color: lightTheme.palette.black.main,
    },
  },
}));

export default StyledWrapper;
