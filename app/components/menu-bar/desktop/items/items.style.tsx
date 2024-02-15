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
}));

export default StyledWrapper;
