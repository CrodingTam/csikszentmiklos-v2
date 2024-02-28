"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  ".footer-items--box": {
    ".footer-items--grid-container": {
      flexDirection: "column",
      gap: theme.spacing(2.5),
      ".footer-items--grid-item": {
        cursor: "pointer",
        ".footer-items--typography": {
          color: theme.palette.black.main,
          textTransform: "uppercase",
        },
      },
    },
  },
}));

export default StyledWrapper;
