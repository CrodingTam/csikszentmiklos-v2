import { PageModel } from "@/app/models/page.model";
import { getLeftPageItems, getRightPageItems } from "@/app/utils/page.util";
import { Box, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import StyledWrapper from "./style";
import Img from "@/app/components/image/component";

const MenuItems: FC = () => {
  const rightItems: PageModel[] = getRightPageItems();
  const leftItems: PageModel[] = getLeftPageItems();

  const renderPageItem = (item: PageModel, index: number): JSX.Element => {
    return (
      <ListItem key={index} className="page-item">
        <Typography variant="subtitle1">{item.label}</Typography>
      </ListItem>
    );
  };

  return (
    <StyledWrapper className="menu-items">
      {leftItems.map(renderPageItem)}
      <ListItem className="logo-item">
        <Box className="logo-holder" position={"relative"}>
          <Img className="logo" alt="csikszentmiklos-logo" src="/images/csikszentmiklos_logo.png" />
        </Box>
      </ListItem>
      {rightItems.map(renderPageItem)}
    </StyledWrapper>
  );
};

export default MenuItems;
