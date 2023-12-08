"use client";

import { FC } from "react";
import StyledWrapper from "./style";
import { Box, Grid, Typography } from "@mui/material";
import Container from "../container/component";
import Img from "../image/component";
import useNavigation from "@/app/hooks/navigation.hook";
import SocialMedias from "../socialmedias/component";
import { socialMediaItems } from "@/app/constants/socal-media.constant";
import PopupItems from "../popup-items/component";
import { popupItems } from "@/app/constants/popup-items.constant";
import PageItems from "../page-items/component";
import { pageItems } from "@/app/constants/page.constant";
import { logoItems } from "@/app/constants/logo-items.constant";
import LogoItems from "../logo-items/component";

const FooterBar: FC = () => {
  const { to } = useNavigation();

  return (
    <StyledWrapper>
      <Container>
        <Grid container className="footer-upper-container">
          <Grid item className="footer-item">
            <Box className="subtitle-box">
              <Typography variant="subtitle1">Curious about our community?</Typography>
            </Box>
            <Box className="logo-holder">
              <Img
                className="logo"
                alt="csikszentmiklos-logo"
                src="/images/csikszentmiklos_logo.png"
                onClick={() => to("/")}
                width={200}
                height={200}
              />
            </Box>
          </Grid>
          <Grid item className="footer-item">
            <Box className="subtitle-box">
              <Typography variant="subtitle1">About us</Typography>
            </Box>
            <Box className="popup-items-box">
              <PopupItems items={popupItems.filter((item) => item.type === "aboutUs")} />
            </Box>
          </Grid>
          <Grid item className="footer-item">
            <Box className="subtitle-box">
              <Typography variant="subtitle1">Pages</Typography>
            </Box>
            <Box className="popup-items-box">
              <PageItems items={pageItems.filter((item) => item.label !== "Home")} />
            </Box>
          </Grid>
          <Grid item className="footer-item">
            <Box className="subtitle-box">
              <Typography variant="subtitle1">Services</Typography>
            </Box>
            <Box className="popup-items-box">
              <PopupItems items={popupItems.filter((item) => item.type === "services")} />
            </Box>
          </Grid>
        </Grid>
        <Grid container className="footer-downer-container">
          <Grid item className="footer-item">
            <Box className="message-box">
              <Typography variant="subtitle1">Get to know everything about us</Typography>
            </Box>
            <Box className="social-medias-box">
              <SocialMedias items={socialMediaItems.filter((item) => item.type === "main")} />
            </Box>
          </Grid>
          <Grid item className="footer-item logos">
            <Box className="message-box">
              <Typography variant="subtitle1">Meet Our Community Volunteers</Typography>
            </Box>
            <Box className="logo-items-box">
              <LogoItems items={logoItems} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

export default FooterBar;
