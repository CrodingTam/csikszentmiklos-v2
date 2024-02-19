"use client";

import { FC } from "react";
import StyledWrapper from "./event-cards.style";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../image/component";
import { EventCardModel } from "@/app/models/event-card.model";
import PrimaryTransparentButton from "../primary-transparent-button/component";
import CommonHeader from "../common-header/component";
import useComingSoon from "@/app/hooks/coming-soon.hook";

type Props = {
  cards: EventCardModel[];
};

const EventCards: FC<Props> = ({ cards }) => {
  const { openComingSoon } = useComingSoon();

  return (
    <>
      <CommonHeader text="Upcoming Events" />
      <StyledWrapper container spacing={3} className="event-card--grid-container">
        {cards.map((card, index) => (
          <Grid item xl={4} md={6} sm={8} xxs={12} key={index} className="event-card--grid-item">
            <Box className="event-card--box">
              <Box className="event-card--box-first">
                <Img
                  className="event-card--image"
                  alt={card.name}
                  src={card.logoSrc ?? "/images/placeholder_logo.png"}
                />
              </Box>
              <Box className="event-card--box-second">
                <Typography className="event-card--typography" variant="h3">
                  {card.name}
                </Typography>
              </Box>
              <Box className="event-card--box-third">
                <Typography className="event-card--typography" variant="mainMedium">
                  {card.description}
                </Typography>
              </Box>
              <Box className="event-card--box-fourth">
                {/* <TimeCounter date={card.eventDate} /> */}
                <Typography className="event-card--typography" variant="mainMedium">
                  Starts at:
                </Typography>
                <br className="event-card--br" />
                <Typography className="event-card--typography" variant="mainBold">
                  <span> </span> {card.eventDate}
                </Typography>
              </Box>
              <Box className="event-card--box-fifth">
                <PrimaryTransparentButton
                  text="More"
                  onClick={() => {
                    openComingSoon();
                  }}
                  width="fit-content"
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </StyledWrapper>
    </>
  );
};

export default EventCards;
