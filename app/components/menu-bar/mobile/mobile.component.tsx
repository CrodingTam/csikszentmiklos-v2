import { FC, useState } from "react";
import StyledWrapper from "./mobile.style";
import Logo from "../logo/logo.component";
import { Box, Grid, IconButton } from "@mui/material";
import { Language, Menu } from "@mui/icons-material";
import CollapseItems from "./drawer-items/drawer-items.component";
import LanguageIcon from "@mui/icons-material/Language";

const Mobile: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <StyledWrapper container className="menu-bar-mobile--grid-container">
      <Grid item className="menu-bar-mobile--grid-item">
        <Box className="menu-bar-mobile--box">
          <IconButton
            disableTouchRipple
            className="menu-bar-mobile--icon-button"
            onClick={() => {}}
          >
            <LanguageIcon className="menu-bar-mobile--icon" />
          </IconButton>
        </Box>
      </Grid>
      <Grid item className="menu-bar-mobile--grid-item">
        <Box className="menu-bar-mobile--box">
          <Logo />
        </Box>
      </Grid>
      <Grid item className="menu-bar-mobile--grid-item">
        <Box className="menu-bar-mobile--box">
          <IconButton
            disableTouchRipple
            className="menu-bar-mobile--icon-button"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <Menu className="menu-bar-mobile--icon" />
          </IconButton>
        </Box>
      </Grid>
      <CollapseItems isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} />
    </StyledWrapper>
  );
};

export default Mobile;
