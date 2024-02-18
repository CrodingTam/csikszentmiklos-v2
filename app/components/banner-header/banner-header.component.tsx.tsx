"use client";

import { FC } from "react";
import StyledWrapper from "./banner-header.style.tsx";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../image/component";
import ScrollDownArrow from "../scroll-down-arrow/scroll-down-arrow.component";

const BannerHeader: FC = () => {
  return (
    <StyledWrapper container className="banner-header-container">
      <Box className="banner-header--box">
        <Box className="banner-header--box">
          <Box className="banner-header--box">
            <Typography variant="main" className="banner-header--typography">
              Welcome to
            </Typography>
            <Typography variant="h1" className="banner-header--typography title">
              Csíkszentmiklós
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid className="banner-header--grid-item" item xs={12}>
        <Img
          className="banner-header-image"
          src="/images/home/csikszentmiklos_banner.jpg"
          alt="csikszentmiklos-banner"
        />
      </Grid>
      <ScrollDownArrow />
    </StyledWrapper>
  );
};

export default BannerHeader;
