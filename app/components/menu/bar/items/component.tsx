"use client";

import { PageItemModel } from "@/app/models/page.model";
import { getAllPageItem, getLeftPageItems, getRightPageItems } from "@/app/utils/page.util";
import { Box, ListItem, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./style";
import Img from "@/app/components/image/component";
import useNavigation from "@/app/hooks/navigation.hook";
import CustomLink from "@/app/components/link/component";
import { usePathname } from "next/navigation";
import { pageItems } from "@/app/constants/page.constant";

const MenuItems: FC = () => {
  const { to } = useNavigation();
  const rightItems: PageItemModel[] = getRightPageItems();
  const leftItems: PageItemModel[] = getLeftPageItems();
  const [activeItem, setActiveItem] = useState<PageItemModel | undefined>(undefined);
  const pathName = usePathname();

  const handleActiveItemChange = useCallback(() => {
    let page = pageItems.find((item) => item.route === pathName);
    setActiveItem(page);
  }, [pathName]);

  const handleMouseLeave = () => {
    handleActiveItemChange();
  };

  useEffect(() => {
    handleActiveItemChange();
  }, [handleActiveItemChange, pathName]);

  const renderPageItem = (item: PageItemModel, index: number): JSX.Element => {
    return (
      <ListItem key={index} className="page-item" onClick={() => handleActiveItemChange()}>
        <CustomLink
          className={activeItem?.route === item.route ? "active-link" : "inactive-link"}
          url={item.route}
        >
          <Typography
            className="label"
            variant="subtitle1"
            sx={{
              color: activeItem?.route === item.route ? "primary.main" : "black !important",
            }}
          >
            {item.label}
          </Typography>
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
