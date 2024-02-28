import { ClickableItemModel } from "@/app/models/social-media.model";
import { FC } from "react";
import StyledWrapper from "./style";
import CustomLink from "../link/component";
import { Box, Grid } from "@mui/material";
import Img from "../image/component";

type Props = {
  items: ClickableItemModel[];
};

const LogoItems: FC<Props> = ({ items }) => {
  return (
    <StyledWrapper container className="logo-items-container">
      {items.map((item, index) => (
        <CustomLink url={item.link} key={index}>
          <Grid item>
            <Box className="logo-box">
              <Img
                className="logo"
                src={item.src}
                alt={item.alt}
                sx={{ img: { marginLeft: item.margin?.left, marginTop: item.margin?.top } }}
              />
            </Box>
          </Grid>
        </CustomLink>
      ))}
    </StyledWrapper>
  );
};

export default LogoItems;
