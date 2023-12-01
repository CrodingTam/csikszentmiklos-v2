import { FC } from "react";
import StyledWrapper from "./style";
import { Toolbar } from "@mui/material";
import DesktopMenuBar from "./desktop/component";

const MenuBar: FC = () => {
  return (
    <StyledWrapper>
      <Toolbar>
        <DesktopMenuBar />
      </Toolbar>
    </StyledWrapper>
  );
};

export default MenuBar;
