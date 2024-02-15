import { FC, useState } from "react";
import StyledWrapper from "./mobile.style";
import Logo from "../logo/logo.component";
import { Collapse, Grid, IconButton } from "@mui/material";
import { KeyboardArrowUp, Menu } from "@mui/icons-material";
import CollapseItems from "./drawer-items/drawer-items.component";

const Mobile: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledWrapper container className="menu-bar-mobile--grid-container">
      <Grid item className="menu-bar-mobile--grid-item">
        <Logo />
      </Grid>
      <Grid item className="menu-bar-mobile--grid-item">
        <IconButton
          disableTouchRipple
          className="menu-bar-mobile--icon-button"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <Menu className="menu-bar-mobile--menu-icon" />
        </IconButton>
      </Grid>
      <CollapseItems isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </StyledWrapper>
  );
};

export default Mobile;
