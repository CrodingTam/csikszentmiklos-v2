"use client";

import { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./navigation-item.style";
import { Box, Typography } from "@mui/material";
import { PageItemModel } from "@/app/models/page.model";
import { usePathname } from "next/navigation";
import { pageItems } from "@/app/constants/page.constant";
import useNavigation from "@/app/hooks/navigation.hook";

type Props = {
  item: PageItemModel;
  onClickItem?: () => void;
};

const NavigationItem: FC<Props> = ({ item, onClickItem = () => {} }) => {
  const [activeItem, setActiveItem] = useState<PageItemModel | undefined>(undefined);
  const pathName = usePathname();
  const { to } = useNavigation();

  const handleActiveItemChange = useCallback(() => {
    let page = pageItems.find((item) => item.route === pathName);
    setActiveItem(page);
  }, [pathName]);

  useEffect(() => {
    handleActiveItemChange();
  }, [handleActiveItemChange, pathName]);

  return (
    <StyledWrapper
      className="navigation-item--list-item"
      onClick={() => {
        handleActiveItemChange();
        onClickItem();
        to(item.route);
      }}
    >
      <Box
        className={`navigation-item--box ${
          activeItem?.route === item.route ? "active" : "inactive"
        }`}
      >
        <Typography
          className="navigation-item--typography"
          variant="subtitle1"
          sx={{
            color: activeItem?.route === item.route ? "primary.main" : "black !important",
          }}
        >
          {item.label}
        </Typography>
      </Box>
    </StyledWrapper>
  );
};

export default NavigationItem;
