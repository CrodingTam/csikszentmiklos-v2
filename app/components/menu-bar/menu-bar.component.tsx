import { FC } from "react";
import StyledWrapper from "./menu-bar.style";
import { Container } from "@mui/material";
import Desktop from "./desktop/desktop.component";
import Mobile from "./mobile/mobile.component";

const MenuBar: FC = () => {
  return (
    <StyledWrapper className="menu-bar--app-bar">
      <Container className="menu-bar--container">
        <Mobile />
        <Desktop />
      </Container>
    </StyledWrapper>
  );
};

export default MenuBar;
