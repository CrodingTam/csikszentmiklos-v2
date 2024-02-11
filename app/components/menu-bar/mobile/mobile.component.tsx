import { FC, useState } from "react";
import StyledWrapper from "./mobile.style";
import Logo from "../logo/logo.component";
import { Collapse, Grid, IconButton } from "@mui/material";
import { KeyboardArrowUp, Menu } from "@mui/icons-material";

const Mobile: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  console.log(menuIsOpen);
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
          {menuIsOpen ? (
            <KeyboardArrowUp className="menu-bar-mobile--menu-icon" />
          ) : (
            <Menu className="menu-bar-mobile--menu-icon" />
          )}
        </IconButton>
      </Grid>
      <Collapse
        in={menuIsOpen}
        timeout={"auto"}
        unmountOnExit
        sx={{
          backgroundColor: "yellow",
          // height: "600px !important",
          // width: "600px",
          position: "fixed",
          zIndex: "2222222",
        }}
      >
        hellooooooooooasdasdasdasdadasoooo
      </Collapse>
    </StyledWrapper>
  );
};

export default Mobile;
