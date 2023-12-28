import { FC } from "react";
import StyledWrapper from "./style";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../image/component";

const BannerHeader: FC = () => {
  return (
    <StyledWrapper container className="banner-header-container">
      <Grid item className="image-item">
        <Img src="/images/home/csikszentmiklos_banner.jpg" alt="csikszentmiklos-banner" />
      </Grid>
      <Box className="welcome-box">
        <Box>
          <Box>
            <Typography variant="mainSemiBold">Welcome to Csíkszentmikló&#39;s page</Typography>
          </Box>
        </Box>
      </Box>
    </StyledWrapper>
  );
};

export default BannerHeader;
