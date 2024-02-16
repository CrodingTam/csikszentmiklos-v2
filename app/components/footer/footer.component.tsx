"use client";

import { FC } from "react";
import StyledWrapper from "./footer.style";
import { Box, Container, Grid, Typography } from "@mui/material";
import Img from "../image/component";
import useNavigation from "@/app/hooks/navigation.hook";
import SocialMedias from "../socialmedias/component";
import { socialMediaItems } from "@/app/constants/socal-media.constant";
import { pageItems } from "@/app/constants/page.constant";

import Items from "./items/items.component";
import { aboutUsItems, servicesItems } from "@/app/constants/footer-items.constant";

const FooterBar: FC = () => {
  const { to } = useNavigation();

  return (
    <StyledWrapper>
      <Container className="footer--container">
        <Grid container className="footer--grid-container" spacing={3}>
          <Grid item className="footer--grid-item">
            <Box className="footer--box">
              <Typography variant="subtitle1" className="footer--typography title">
                Curious about our community?
              </Typography>
              <Box className="footer--box">
                <Img
                  className="footer--image"
                  alt="csikszentmiklos-logo"
                  src="/images/csikszentmiklos_logo.png"
                  onClick={() => to("/")}
                />
                <SocialMedias items={socialMediaItems} />
              </Box>
            </Box>
          </Grid>
          <Grid item className="footer--grid-item">
            <Items title="Home" items={pageItems.filter((item) => item.label !== "Home")} />
          </Grid>
          <Grid item className="footer--grid-item">
            <Items title="About Us" items={aboutUsItems} />
          </Grid>
          <Grid item className="footer--grid-item">
            <Items title="Services" items={servicesItems} />
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

export default FooterBar;
