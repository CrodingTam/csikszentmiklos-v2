import { FC } from "react";
import StyledWrapper from "./style";
import { Container, Toolbar } from "@mui/material";
import DesktopMenuBar from "./desktop/component";

const MenuBar: FC = () => {
  return (
    <StyledWrapper>
      <Container className="menu-container">
        <DesktopMenuBar />
      </Container>
    </StyledWrapper>
  );
};

export default MenuBar;
