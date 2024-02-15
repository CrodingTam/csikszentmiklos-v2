"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  ".event-card--grid-item": {
    "> .event-card--box": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      borderRadius: "10px",
      height: "600px",
      backgroundColor: theme.palette.white.main,
      padding: "25px",
      width: "100%",
      boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      ".event-card--box-first": {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        ".event-card--image": {
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          [theme.breakpoints.down("xs")]: {
            width: "125px",
            height: "125px",
          },
        },
      },
      ".event-card--box-second": {
        textAlign: "center",
        "> .event-card--typography": {
          [theme.breakpoints.down("lg")]: {
            fontSize: "20px",
          },
        },
      },
      ".event-card--box-third": {},
      ".event-card--box-fourth": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        "> .event-card--br": {
          display: "none",
          [theme.breakpoints.down("xs")]: {
            display: "block",
          },
        },
        "> .event-card--typography": {
          fontSize: "28px",
          color: theme.palette.white.main,
          [theme.breakpoints.down("lg")]: {
            fontSize: "20px",
          },
        },
      },
      ".event-card--box-fifth": {
        display: "flex",
        justifyContent: "center",
      },
    },
  },
}));

export default StyledWrapper;
