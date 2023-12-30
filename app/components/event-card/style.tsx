"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  justifyContent: "space-between",
  gap: lightTheme.spacing(3),
  "> .MuiGrid-item": {
    border: "2px solid black",
    borderRadius: "10px",
    width: "550px",
    height: "600px",
    backgroundColor: lightTheme.palette.white.main,
    display: "flex",
    flexDirection: "column",
    gap: lightTheme.spacing(5),
    padding: "10px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
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
