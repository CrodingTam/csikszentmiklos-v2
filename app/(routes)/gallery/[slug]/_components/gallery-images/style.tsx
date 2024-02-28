"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  width: "100%",
  ".react-photo-album": {
    width: "100%",
  },
  ".react-photo-album--row": {
    img: {
      borderRadius: "10px",
      opacity: 0.9,
      transitionTimingFunction: "ease-in-out",
      transition: "0.2s",
      "&:hover": {
        opacity: 1,
        transform: "scale(1.03)",
      },
    },
  },
}));

export default StyledWrapper;
