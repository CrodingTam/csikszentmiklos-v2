import { FC } from "react";
import StyledWrapper from "./item.style";
import Img from "../../image/component";
import { SlideItem } from "@/app/models/slide-item.model";
import { Box, Typography } from "@mui/material";
import CustomLink from "../../link/component";

type Props = {
  slide: SlideItem;
};

const Item: FC<Props> = ({ slide }) => {
  return (
    <CustomLink url={slide.link}>
      <StyledWrapper>
        <Box className="carousel-item--box">
          <Box className="carousel-item--box">
            <Typography variant="h4">2024-02-08</Typography>
          </Box>
        </Box>
        <Img className="carousel-item--box" src={slide.image.src} alt={slide.image.alt} />
        <Box className="carousel-item--box">
          <Box className="carousel-item--box">
            <Typography className="carousel-item--typography description" variant="h4">
              {slide.description}
            </Typography>
          </Box>
        </Box>
      </StyledWrapper>
    </CustomLink>
  );
};

export default Item;
