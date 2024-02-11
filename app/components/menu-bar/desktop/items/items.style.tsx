"use client";

import { List } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(List)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  ".desktop-items--list-item-logo": {
    width: "fit-content",
    marginRight: "50px",
    marginLeft: "50px",
    paddingTop: "0px",
    paddingBottom: "0px",
    [theme.breakpoints.down("xl")]: {
      margin: 0,
    },
  },
  ".desktop-items--list-item": {
    width: "fit-content",
    paddingLeft: "0px",
    paddingRight: "0px",
    ".desktop-items--link": {
      width: "fit-content !important",
    },
    ".inactive": {
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "3px",
        bottom: "35px",
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
    },
    ".desktop-items--typography": {
      textTransform: "uppercase",
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
      },
    },
  },
}));

export default StyledWrapper;
