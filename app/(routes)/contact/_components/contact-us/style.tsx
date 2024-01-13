"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(() => ({
  height: "100%",
  ".contact-us-form": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    [lightTheme.breakpoints.up("lg")]: {
      width: "377px",
    },
    [lightTheme.breakpoints.down("lg")]: {
      width: "100%",
    },
    ".MuiFormLabel-asterisk": {
      display: "none",
    },
    ".MuiInputLabel-shrink": {
      paddingLeft: "5px",
    },
    ".input-wrapper": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: lightTheme.spacing(2),
      ".input-field": {
        borderRadius: "6px",
        "> .MuiInputBase-root": {
          height: "51px",
        },
        ".input-text": {
          fontSize: "16px",
          padding: "5px",
          "&:focus": {
            fontSize: "30px",
          },
        },
      },
      "> .text-area": {
        "> .MuiInputBase-root": {
          height: "180px",
          "> .MuiInputBase-input": {
            height: "100% !important",
          },
        },
      },
    },
  },
}));

export default StyledWrapper;
