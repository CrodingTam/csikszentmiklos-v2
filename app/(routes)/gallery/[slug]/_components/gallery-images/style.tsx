"use client";

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Grid)(() => ({
  width: "100%",
  ".react-photo-album": {
    width: "100%",
  },
}));

export default StyledWrapper;
