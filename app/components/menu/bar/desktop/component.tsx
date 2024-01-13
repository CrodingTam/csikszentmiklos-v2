"use client";
import { FC } from "react";
import StyledWrapper from "./style";
import { Grid } from "@mui/material";
import MenuItems from "../items/component";

const DesktopMenuBar: FC = () => {
  return (
    <StyledWrapper container className="desktop-menu-bar">
      <Grid item className="menu-items-holder">
        <MenuItems />
      </Grid>
    </StyledWrapper>
  );
};

export default DesktopMenuBar;
