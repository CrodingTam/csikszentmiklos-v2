import { FC } from "react";
import StyledWrapper from "./desktop.style";
import { Grid } from "@mui/material";
import MenuItems from "./items/items.component";
import Logo from "../logo/logo.component";

const Desktop: FC = () => {
  return (
    <StyledWrapper container className="menu-bar-desktop--grid-container">
      <Grid item className="menu-bar-desktop--grid-item">
        <MenuItems />
      </Grid>
    </StyledWrapper>
  );
};

export default Desktop;
