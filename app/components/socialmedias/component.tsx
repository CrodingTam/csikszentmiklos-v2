import { FC } from "react";
import StyledWrapper from "./style";
import CustomLink from "../link/component";
import Img from "../image/component";
import { SocialMediaLogo } from "@/app/constants/socal-media.constant";

type Props = {
  items: SocialMediaLogo[];
};

const SocialMedias: FC<Props> = ({ items }) => {
  return (
    <StyledWrapper className="social-medias-container">
      {items.map((item, index) => (
        <CustomLink url={item.link} key={index}>
          <Img src={item.src} alt={item.alt} />
        </CustomLink>
      ))}
    </StyledWrapper>
  );
};

export default SocialMedias;
