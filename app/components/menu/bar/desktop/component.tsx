import { FC } from "react";
import StyledWrapper from "./style";
import { Box, Grid } from "@mui/material";
import MenuItems from "../items/component";
import Img from "@/app/components/image/component";

const DesktopMenuBar: FC = () => {
  return (
    <StyledWrapper className="desktop-menu-bar">
      <Grid item className="menu-items-holder">
        <MenuItems />
      </Grid>
    </StyledWrapper>
  );
};

export default DesktopMenuBar;
