import { PageModel } from "@/app/models/page.model";
import { getAllPageItem } from "@/app/utils/page.util";
import { ListItem, Typography } from "@mui/material";
import { FC } from "react";
import StyledWrapper from "./style";

const MenuItems: FC = () => {
  const items: PageModel[] = getAllPageItem();

  return (
    <StyledWrapper className="menu-items">
      {items.map((item, index) => (
        <ListItem key={index} className="page-item">
          <Typography variant="mainSemiBold">{item.label}</Typography>
        </ListItem>
      ))}
    </StyledWrapper>
  );
};

export default MenuItems;
