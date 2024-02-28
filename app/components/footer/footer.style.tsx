"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: lightTheme.palette.primary.main,
  width: "100%",
  marginTop: "120px",
  [theme.breakpoints.down("md")]: {
    marginTop: "80px",
  },
  ".title": {
    fontSize: "26px",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  ".MuiContainer-root": {
    padding: "30px !important",
    maxWidth: "1400px !important",
    ".footer--grid-container": {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      ".footer--grid-item": {
        ".footer--box": {
          display: "flex",
          flexDirection: "column",
          gap: lightTheme.spacing(4),
          ".footer--box": {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
            ".footer--image": {
              backgroundColor: lightTheme.palette.background.default,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              [theme.breakpoints.down("sm")]: {
                width: "150px",
                height: "150px",
              },
              img: {
                marginTop: "-7px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "-7px",
                },
              },
            },
          },
        },
      },
    },
  },
}));

export default StyledWrapper;
