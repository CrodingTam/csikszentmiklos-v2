import { FC } from "react";
import StyledWrapper from "./logo.style";
import Img from "../../image/component";
import useNavigation from "@/app/hooks/navigation.hook";

const Logo: FC = () => {
  const { to } = useNavigation();

  return (
    <StyledWrapper className="menu-bar-logo--box">
      <Img
        className="menu-bar-logo--image"
        alt="csikszentmiklos-logo"
        src="/images/csikszentmiklos_logo.png"
        onClick={() => to("/")}
      />
    </StyledWrapper>
  );
};

export default Logo;
