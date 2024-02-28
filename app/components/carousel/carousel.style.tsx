"use client";

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  ".swiper-slide": {
    width: "550px !important",
    height: "530px !important",
    backgroundColor: "#ffefe5",
    [theme.breakpoints.down("xl")]: {
      width: "450px !important",
    },
    [theme.breakpoints.down("lg")]: {
      width: "400px !important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
}));

export default StyledWrapper;
