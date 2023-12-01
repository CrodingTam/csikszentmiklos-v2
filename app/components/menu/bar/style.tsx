"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(AppBar)(() => ({
  backgroundColor: lightTheme.palette.background.default,
}));

export default StyledWrapper;
