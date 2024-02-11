import { PageItemModel } from "@/app/models/page.model";
import { getLeftPageItems, getRightPageItems } from "@/app/utils/page.util";
import { ListItem } from "@mui/material";
import { FC } from "react";
import StyledWrapper from "./items.style";
import Logo from "../../logo/logo.component";
import NavigationItem from "../../navigation-item/navigation-item.component";

const Items: FC = () => {
  const rightItems: PageItemModel[] = getRightPageItems();
  const leftItems: PageItemModel[] = getLeftPageItems();

  return (
    <StyledWrapper className="desktop-items--list">
      {leftItems.map((pageItem, index) => (
        <NavigationItem key={index} item={pageItem} />
      ))}
      <ListItem className="desktop-items--list-item-logo">
        <Logo />
      </ListItem>
      {rightItems.map((pageItem, index) => (
        <NavigationItem key={index} item={pageItem} />
      ))}
    </StyledWrapper>
  );
};

export default Items;
