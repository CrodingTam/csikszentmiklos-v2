"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  ".swiper-slide": {
    width: "550px !important",
    height: "530px !important",
    backgroundColor: "#ffefe5",
  },
}));

export default StyledWrapper;
