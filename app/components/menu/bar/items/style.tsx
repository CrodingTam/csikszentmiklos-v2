"use client";

import { lightTheme } from "@/app/utils/theme.utils";
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(List)(() => ({
  display: "flex",
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
      height: "150px",
      ".logo": {
        position: "absolute",
        top: "-30px",
        width: "225px",
        height: "225px",
        cursor: "pointer",
      },
    },
  },

  ".page-item": {
    ".MuiTypography-root": {
      textTransform: "uppercase",
      color: lightTheme.palette.black.main,
      fontWeight: "800",
    },
  },
}));

export default StyledWrapper;
