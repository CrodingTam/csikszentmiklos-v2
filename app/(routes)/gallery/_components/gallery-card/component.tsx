"use client";
import { FC } from "react";
import StyledWrapper from "./style";
import { GalleryCardModel } from "@/app/models/gallery-card.model";
import { Grid } from "@mui/material";

const staticCards: GalleryCardModel[] = [
  { src: "", title: "", subTitle: "" },
  { src: "", title: "", subTitle: "" },
  { src: "", title: "", subTitle: "" },
  { src: "", title: "", subTitle: "" },
];

const GalleryCards: FC = () => {
  return (
    <StyledWrapper container>
      {staticCards.map((card, index) => (
        <Grid item key={index}></Grid>
      ))}
    </StyledWrapper>
  );
};

export default GalleryCards;
