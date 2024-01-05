"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(() => ({
  width: "100%",
  backgroundColor: lightTheme.palette.primary.main,
  ".MuiContainer-root": {
    padding: "16px !important",
    minHeight: "550px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: lightTheme.spacing(8),
    marginTop: "140px",
    ".MuiTypography-root": {
      textTransform: "uppercase",
    },
    ".footer-upper-container": {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      gap: lightTheme.spacing(4),
    },
    ".footer-downer-container": {
      justifyContent: "space-between",
      ".MuiGrid-item:nth-of-type(2)": {
        paddingRight: "17%",
      },
    },

    // common
    ".footer-item": {
      display: "flex",
      flexDirection: "column",
      gap: lightTheme.spacing(4),
      ".subtitle-box": {
        "> .MuiTypography-root": {
          color: lightTheme.palette.black.main,
          fontSize: "24px",
        },
      },
      ".logo-holder": {
        display: "flex",
        ".logo": {
          backgroundColor: lightTheme.palette.background.default,
          borderRadius: "50%",
          img: {
            marginLeft: "-7px",
            marginTop: "-7px",
          },
        },
      },
      ".message-box": {
        "> .MuiTypography-root": {
          color: lightTheme.palette.black.main,
          fontSize: "16px",
        },
      },
    },
    ".logos": {
      gap: lightTheme.spacing(2),
    },
  },
}));

export default StyledWrapper;
