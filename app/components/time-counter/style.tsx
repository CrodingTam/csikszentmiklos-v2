"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  justifyContent: "center",
  gap: lightTheme.spacing(2),
  ".MuiGrid-item": {
    position: "relative",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: lightTheme.spacing(1.25),
    "> .MuiTypography-root": {
      color: lightTheme.palette.primary.main,
    },
    ".MuiCircularProgress-root": {
      borderRadius: "50%",
      boxShadow: `inset 0 0 0 ${(4 / 44) * 80}px ${lightTheme.palette.background.default}`,
    },
    ".MuiBox-root": {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "> .MuiTypography-root": {
        fontSize: "20px",
        fontWeight: 600,
        marginTop: "30px",
      },
    },
  },
}));

export default StyledWrapper;
