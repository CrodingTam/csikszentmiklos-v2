import { ClickableItemModel } from "@/app/models/social-media.model";
import { FC } from "react";
import StyledWrapper from "./style";
import CustomLink from "../link/component";
import { Grid } from "@mui/material";
import Img from "../image/component";

type Props = {
  items: ClickableItemModel[];
};

const SocialMedias: FC<Props> = ({ items }) => {
  return (
    <StyledWrapper container className="social-medias-container">
      {items.map((item, index) => (
        <CustomLink url={item.link} key={index}>
          <Grid item>
            <Img src={item.src} alt={item.alt} />
          </Grid>
        </CustomLink>
      ))}
    </StyledWrapper>
  );
};

export default SocialMedias;
