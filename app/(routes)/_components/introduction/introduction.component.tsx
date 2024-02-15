"use client";

import { FC } from "react";
import StyledWrapper from "./introduction.style";
import { Box, Grid, Typography } from "@mui/material";
import Img from "@/app/components/image/component";
import CommonHeader from "@/app/components/common-header/component";
import PrimaryTransparentButton from "@/app/components/primary-transparent-button/component";
import useNavigation from "@/app/hooks/navigation.hook";

const Introduction: FC = () => {
  const { externalTo } = useNavigation();
  return (
    <>
      <CommonHeader text="Introduction" type="component" />
      <StyledWrapper container className="introduction--grid-container">
        <Grid item xxs={6} className="introduction--grid-item">
          <Typography variant="h2">Csíkszentmiklós</Typography>
          <Typography variant="h3">Our heritage</Typography>
          <Typography variant="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s.
          </Typography>
          <Box>
            <PrimaryTransparentButton
              text="More Info"
              onClick={() => {
                externalTo("https://hu.wikipedia.org/wiki/Cs%C3%ADkszentmikl%C3%B3s");
              }}
              width="fit-content"
            />
          </Box>
        </Grid>
        <Grid item xxs={6} className="introduction--grid-item">
          <Img alt="csikszentmiklos-summer" src="/images/csikszentmiklos_summer.jpg" />
        </Grid>
      </StyledWrapper>
    </>
  );
};

export default Introduction;
