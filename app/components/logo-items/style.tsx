"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  flexDirection: "row",
  gap: lightTheme.spacing(6),
  ".MuiLink-root": {
    width: "fit-content !important",
    ".MuiGrid-item": {
      ".logo-box": {
        display: "flex",
        ".logo": {
          backgroundColor: lightTheme.palette.background.default,
          borderRadius: "50%",
          width: "75px",
          height: "75px",
        },
      },
    },
  },
}));

export default StyledWrapper;
