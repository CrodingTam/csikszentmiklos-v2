import { FC } from "react";
import { Box, Typography } from "@mui/material";
import StyledWrapper from "./item.style";
import PrimaryTransparentButton from "@/app/components/primary-transparent-button/component";
import Img from "@/app/components/image/component";
import { LogoItemModel } from "@/app/models/logo-item.model";

type Props = {
  association: LogoItemModel;
};

const Item: FC<Props> = ({ association }) => {
  return (
    <StyledWrapper>
      <Box className="association-item--box">
        <Box className="association-item--box mask">
          <Img
            src={association.image.src}
            alt={association.image.alt}
            width={association.image.width}
            height={association.image.height}
          />
        </Box>
      </Box>
      <Box className="association-item--box">
        <Typography variant="h3" className="association-item--typography title">
          {association.title}
        </Typography>
        <Typography className="association-item--typography description" variant="mainMedium">
          {association.description}
        </Typography>
        <PrimaryTransparentButton text="Explore" />
      </Box>
    </StyledWrapper>
  );
};

export default Item;
