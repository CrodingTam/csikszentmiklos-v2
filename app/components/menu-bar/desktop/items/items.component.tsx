import { PageItemModel } from "@/app/models/page.model";
import { getLeftPageItems, getRightPageItems } from "@/app/utils/page.util";
import { ListItem, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./items.style";
import CustomLink from "@/app/components/link/component";
import { usePathname } from "next/navigation";
import { pageItems } from "@/app/constants/page.constant";
import Logo from "../../logo/logo.component";

const Items: FC = () => {
  const rightItems: PageItemModel[] = getRightPageItems();
  const leftItems: PageItemModel[] = getLeftPageItems();
  const [activeItem, setActiveItem] = useState<PageItemModel | undefined>(undefined);
  const pathName = usePathname();

  const handleActiveItemChange = useCallback(() => {
    let page = pageItems.find((item) => item.route === pathName);
    setActiveItem(page);
  }, [pathName]);

  useEffect(() => {
    handleActiveItemChange();
  }, [handleActiveItemChange, pathName]);

  const renderPageItem = (item: PageItemModel, index: number): JSX.Element => {
    return (
      <ListItem
        key={index}
        className="desktop-items--list-item"
        onClick={() => handleActiveItemChange()}
      >
        <CustomLink
          className={`desktop-items--link ${
            activeItem?.route === item.route ? "active" : "inactive"
          }`}
          url={item.route}
        >
          <Typography
            className="desktop-items--typography"
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
    <StyledWrapper className="desktop-items--list">
      {leftItems.map(renderPageItem)}
      <ListItem className="desktop-items--list-item-logo">
        <Logo />
      </ListItem>
      {rightItems.map(renderPageItem)}
    </StyledWrapper>
  );
};

export default Items;
