"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  borderRadius: "10px",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  backgroundColor: theme.palette.white.main,
  width: "100%",
  height: "500px",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "800px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "700px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "600px",
  },
  ".introduction--grid-item:nth-of-type(1)": {
    [theme.breakpoints.down("md")]: {
      height: "50%",
    },
    ".introduction--box": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "25px",
      height: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: "10px",
      },
      ".introduction--typography": {
        textAlign: "center",
      },
      ".title": {
        fontSize: "45px",
        [theme.breakpoints.down("lg")]: {
          fontSize: "35px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "30px",
        },
      },
      ".subtitle": {
        fontSize: "35px",
        [theme.breakpoints.down("lg")]: {
          fontSize: "30px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "24px",
        },
      },
      ".description": {
        textAlign: "justify",
        [theme.breakpoints.down("lg")]: {
          fontSize: "16px",
        },
        [theme.breakpoints.down("sm")]: {
          maxHeight: "100px",
          overflowY: "auto",
          paddingRight: "10px",
          "::-webkit-scrollbar": {
            opacity: "1 !important",
            width: "4px",
            backgroundColor: "transparent",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
      "> .MuiBox-root": {
        display: "flex",
        justifyContent: "center",
      },
    },
  },
  ".introduction--grid-item:nth-of-type(2)": {
    [theme.breakpoints.down("md")]: {
      height: "50%",
    },
    ".MuiBox-root": {
      width: "100%",
      height: "100%",
      img: {
        objectFit: "cover !important",
      },
    },
  },
}));

export default StyledWrapper;
