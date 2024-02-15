"use client";

import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(ListItem)(({ theme }) => ({
  width: "fit-content",
  paddingLeft: "0px",
  paddingRight: "0px",
  ".navigation-item--link": {
    width: "fit-content !important",
  },
  ".inactive": {
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "3px",
      bottom: "5px",
      left: "50%",
      transform: "translate(-50%, 0%)",
      backgroundColor: theme.palette.primary.main,
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      width: "100%",
    },
    [theme.breakpoints.down("md")]: {
      "&:hover:before": {
        width: "unset",
      },
    },
  },
  ".navigation-item--typography": {
    textTransform: "uppercase",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
  },
}));

export default StyledWrapper;
