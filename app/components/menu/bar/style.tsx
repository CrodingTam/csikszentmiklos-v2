"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(AppBar)(() => ({
  boxShadow: "none",
  backgroundColor: lightTheme.palette.background.default,
  position: "sticky",
  ".menu-container": {
    maxWidth: "1400px",
  },
}));

export default StyledWrapper;
