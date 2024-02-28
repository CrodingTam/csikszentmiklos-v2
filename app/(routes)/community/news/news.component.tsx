"use client";

import { FC } from "react";
import StyledWrapper from "./news.style";
import { Grid } from "@mui/material";
import Carousel from "@/app/components/carousel/carousel.component";
import { SlideItem } from "@/app/models/slide-item.model";
import CommonHeader from "@/app/components/common-header/component";

const staticNewsItems: SlideItem[] = [
  {
    image: {
      src: "/images/sausage_festival.jpg",
      alt: "autumn",
    },
    description: "The Csíkszentmiklós Sausage Festival took place with a great atmosphere.",
    link: "https://szekelyhon.ro/aktualis/csikszentmiklosi-kolbaszfesztival-mar-tizedik-alkalommal",
  },
  {
    image: {
      src: "/images/csikszentmiklos_spring.jpg",
      alt: "spring",
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://szekelyhon.ro/aktualis/csikszentmiklosi-kolbaszfesztival-mar-tizedik-alkalommal",
  },
  {
    image: {
      src: "/images/csikszentmiklos_winter.jpg",
      alt: "winter",
    },
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "https://szekelyhon.ro/aktualis/csikszentmiklosi-kolbaszfesztival-mar-tizedik-alkalommal",
  },
];

const News: FC = () => {
  return (
    <>
      <CommonHeader text="News" />
      <StyledWrapper container>
        <Grid item xxs={12}>
          <Carousel slides={staticNewsItems} />
        </Grid>
      </StyledWrapper>
    </>
  );
};

export default News;
