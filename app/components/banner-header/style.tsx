"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  marginTop: "14vh",
  alignItems: "center",
  flexDirection: "column",
  ".image-item": {
    width: "100%",
    height: "60vh",
    ".MuiBox-root": {
      width: "100%",
      height: "100%",
      img: {
        objectFit: "cover !important",
        objectPosition: "center !important",
      },
    },
  },
  ".welcome-box": {
    display: "flex",
    justifyContent: "center",
    "> .MuiBox-root": {
      marginTop: "40px",
      position: "absolute",
      display: "flex",
      maxWidth: "1200px",
      width: "100%",
      zIndex: "1",
      "> .MuiBox-root": {
        position: "absolute",
        height: "80px",
        width: "fit-content",
        backgroundColor: lightTheme.palette.primary.main,
        borderRadius: "5px",
        bottom: "4px",
        left: "0",
        right: "0",
        marginRight: "auto",
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        ".MuiTypography-root": {
          fontSize: "28px",
          lineHeight: "28px",
          width: "100%",
          zIndex: 10,
          textAlign: "center",
          color: lightTheme.palette.white.main,
          paddingLeft: "30px",
          paddingRight: "30px",
        },
      },
    },
  },
}));

export default StyledWrapper;
