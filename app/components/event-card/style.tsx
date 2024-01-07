"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  justifyContent: "space-between",
  gap: lightTheme.spacing(3),
  "> .MuiGrid-item": {
    borderRadius: "10px",
    width: "550px",
    height: "600px",
    backgroundColor: lightTheme.palette.white.main,
    display: "flex",
    flexDirection: "column",
    gap: lightTheme.spacing(5),
    padding: "10px",
    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    "> .logo-box": {
      width: "100%",
      display: "flex",
      marginTop: "15px",
      justifyContent: "center",
      ".MuiBox-root": {
        borderRadius: "50%",
        width: "150px",
        height: "150px",
      },
    },
    "> .title-box": {
      textAlign: "center",
      ".MuiTypography-root": {},
    },
    "> .description-box": {
      height: "170px",
      overflowY: "auto",
      paddingLeft: "30px",
      paddingRight: "20px",
      "::-webkit-scrollbar": {
        width: "4px",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: lightTheme.palette.primary.main,
        borderRadius: "10px",
      },
    },
  },
}));

export default StyledWrapper;
