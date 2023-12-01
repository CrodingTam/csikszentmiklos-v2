"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(List)(() => ({
  display: "flex",
  ".page-item": {
    ".MuiTypography-root": {
      color: lightTheme.palette.black.main,
    },
  },
}));

export default StyledWrapper;
