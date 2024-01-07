"use client";

import { FC } from "react";
import StyledWrapper from "./style";
import { Grid } from "@mui/material";
import CommonHeader from "@/app/components/common-header/component";

const GoogleMap: FC = () => {
  return (
    <>
      <CommonHeader text="Find our location on the map" />
      <StyledWrapper container>
        <Grid item>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.5028117765874!2d25.83898479195046!3d46.438733393400454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ad7f6f2a88f7d%3A0x8082d3632d411af5!2sComposesoratul%20Nicoles%C8%99ti!5e0!3m2!1shu!2sro!4v1686253779692!5m2!1shu!2sro"
            loading="lazy"
          />
        </Grid>
      </StyledWrapper>
    </>
  );
};

export default GoogleMap;
