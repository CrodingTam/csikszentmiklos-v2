"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(() => ({
  width: "30px",
  height: "30px",
  border: "1px solid black",
}));

export default StyledWrapper;
