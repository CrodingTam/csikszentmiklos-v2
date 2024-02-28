import { PageItemModel } from "@/app/models/page.model";
import { getLeftPageItems, getRightPageItems } from "@/app/utils/page.util";
import { Grid, List, ListItem } from "@mui/material";
import { FC } from "react";
import StyledWrapper from "./items.style";
import NavigationItem from "../../navigation-item/navigation-item.component";
import Logo from "../../logo/logo.component";

const Items: FC = () => {
  const rightItems: PageItemModel[] = getRightPageItems();
  const leftItems: PageItemModel[] = getLeftPageItems();

  return (
    <StyledWrapper container>
      <Grid item xxs={4}>
        <List className="desktop-items--list">
          {leftItems.map((pageItem, index) => (
            <NavigationItem key={index} item={pageItem} />
          ))}
        </List>
      </Grid>
      <Grid item xxs={2}>
        <Logo />
      </Grid>
      <Grid item xxs={4}>
        <List className="desktop-items--list">
          {rightItems.map((pageItem, index) => (
            <NavigationItem key={index} item={pageItem} />
          ))}
        </List>
      </Grid>
    </StyledWrapper>
  );
};

export default Items;
