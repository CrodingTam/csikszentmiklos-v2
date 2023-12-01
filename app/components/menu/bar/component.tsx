import { FC } from "react";
import StyledWrapper from "./style";
import { Container, Toolbar } from "@mui/material";
import DesktopMenuBar from "./desktop/component";

const MenuBar: FC = () => {
  return (
    <StyledWrapper>
      <Toolbar>
        <Container maxWidth="xl">
          <DesktopMenuBar />
        </Container>
      </Toolbar>
    </StyledWrapper>
  );
};

export default MenuBar;
