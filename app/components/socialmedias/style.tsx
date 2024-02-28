"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: lightTheme.spacing(3),
  ".MuiLink-root": {
    width: "fit-content !important",
    ".MuiBox-root": {
      width: "40px",
      height: "40px",
    },
  },
}));

export default StyledWrapper;
