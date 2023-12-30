"use client";

import { FC } from "react";
import StyledWrapper from "./style";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../image/component";
import { EventCardModel } from "@/app/models/event-card.model";
import TimeCounter from "../time-counter/component";
import { DateTime } from "luxon";

type Props = {
  cards: EventCardModel[];
};

const EventCards: FC<Props> = ({ cards }) => {
  return (
    <StyledWrapper container>
      {cards.map((card, index) => (
        <Grid item key={index}>
          <Box className="logo-box">
            <Img alt={card.name} src={card.logoSrc ?? "/images/placeholder_logo.png"} />
          </Box>
          <Box className="title-box">
            <Typography variant="h3">{card.name}</Typography>
          </Box>
          <Box className="description-box">
            <Typography variant="h4">{card.description}</Typography>
          </Box>
          <Box className="timer-box">
            <TimeCounter date={card.eventDate} />
          </Box>
        </Grid>
      ))}
    </StyledWrapper>
  );
};

export default EventCards;
