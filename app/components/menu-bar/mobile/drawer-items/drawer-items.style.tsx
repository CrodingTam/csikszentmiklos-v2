"use client";

import { Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Drawer)(({ theme }) => ({
  ".drawer-items--grid-container": {
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
    justifyContent: "space-between",
    padding: "30px",
    height: "fit-content",
    ".drawer-items--grid-item": {
      ".drawer-items--highight-off-icon": {
        width: "50px",
        height: "50px",
        marginBottom: "20px",
        cursor: "pointer",
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },
}));

export default StyledWrapper;
