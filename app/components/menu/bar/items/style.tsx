"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(List)(() => ({
  display: "flex",
  justifyContent: "space-between",
  ".MuiListItem-root": {},
  ".logo-item": {
    width: "fit-content",
    marginRight: "150px",
    marginLeft: "150px",
    ".logo-holder": {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      width: "175px",
      height: "100px",
      ".logo": {
        position: "absolute",
        top: "-40px",
        width: "170px",
        height: "170px",
        cursor: "pointer",
      },
    },
  },
  ".page-item": {
    width: "fit-content",
    paddingLeft: "0px",
    paddingRight: "0px",
    ".link": {
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
        backgroundColor: lightTheme.palette.primary.main,
        visibility: "hidden",
        transition: "all 0.3s ease-in-out",
      },
      "&:hover:before": {
        visibility: "visible",
        width: "80%",
      },
    },
    ".label": {
      textTransform: "uppercase",
    },
  },
}));

export default StyledWrapper;
