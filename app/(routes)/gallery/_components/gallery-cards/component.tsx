"use client";
import { FC } from "react";
import StyledWrapper from "./style";
import { GalleryCardModel } from "@/app/models/gallery-card.model";
import { Box, Grid, Typography } from "@mui/material";
import Img from "@/app/components/image/component";
import useNavigation from "@/app/hooks/navigation.hook";

const staticCards: GalleryCardModel[] = [
  {
    src: "/images/csikszentmiklos_autumn.jpg",
    title: "Moments of our community",
    name: "community-moments",
  },
  {
    src: "/images/csikszentmiklos_spring.jpg",
    title: "Youth Association of Csíkszentmiklós",
    name: "community-moments", //todo: dynamic data
  },
  {
    src: "/images/csikszentmiklos_spring.jpg",
    title: "Elder Association of Csíkszentmiklós",
    name: "community-moments", //todo: dynamic data
  },
  {
    src: "/images/csikszentmiklos_spring.jpg",
    title: "Volunteer firefighters",
    name: "community-moments", //todo: dynamic data
  },
  {
    src: "/images/csikszentmiklos_summer.jpg",
    title: "Sausage festival",
    name: "community-moments", //todo: dynamic data
  },
  {
    src: "/images/csikszentmiklos_winter.jpg",
    title: "Battle of the kitchens",
    name: "community-moments",
  },
];

const GalleryCards: FC = () => {
  const { to } = useNavigation();
  return (
    <StyledWrapper container>
      {staticCards.map((card, index) => (
        <Grid item key={index} className="card-item">
          <Box className="card-box" onClick={() => to(`/gallery/${card.name}`)}>
            <Img className="image-box" src={card.src} alt={card.title} />
            <Box className="text-box">
              <Typography className="title" variant="mainBold">
                {card.title}
              </Typography>
              <Typography className="subtitle" variant="mainMedium">
                Click here for more content
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </StyledWrapper>
  );
};

export default GalleryCards;
