"use client";

import { PageModel } from "@/app/models/page.model";
import { getLeftPageItems, getRightPageItems } from "@/app/utils/page.util";
import { Box, ListItem, Typography } from "@mui/material";
import { FC } from "react";
import StyledWrapper from "./style";
import Img from "@/app/components/image/component";
import useNavigation from "@/app/hooks/navigation.hook";
import CustomLink from "@/app/components/link/component";

const MenuItems: FC = () => {
  const { to } = useNavigation();
  const rightItems: PageModel[] = getRightPageItems();
  const leftItems: PageModel[] = getLeftPageItems();

  const renderPageItem = (item: PageModel, index: number): JSX.Element => {
    return (
      <ListItem key={index} className="page-item">
        <CustomLink url={item.route}>
          <Typography variant="subtitle1">{item.label}</Typography>
        </CustomLink>
      </ListItem>
    );
  };

  return (
    <StyledWrapper className="menu-items">
      {leftItems.map(renderPageItem)}
      <ListItem className="logo-item">
        <Box className="logo-holder" position={"relative"}>
          <Img
            className="logo"
            alt="csikszentmiklos-logo"
            src="/images/csikszentmiklos_logo.png"
            onClick={() => to("/")}
          />
        </Box>
      </ListItem>
      {rightItems.map(renderPageItem)}
    </StyledWrapper>
  );
};

export default MenuItems;
