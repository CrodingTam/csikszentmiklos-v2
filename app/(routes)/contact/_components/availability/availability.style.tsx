"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  ".item-box": {
    display: "flex",
    alignItems: "center",
    gap: lightTheme.spacing(0.5),
    ".icon": {
      marginRight: lightTheme.spacing(2),
    },
  },
  ".house-box": {
    width: "100%",
  },
}));

export default StyledWrapper;
