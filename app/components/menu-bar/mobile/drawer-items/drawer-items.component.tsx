import { Dispatch, FC, SetStateAction } from "react";
import StyledWrapper from "./drawer-items.style";
import { Grid } from "@mui/material";
import { getAllPageItem } from "@/app/utils/page.util";
import NavigationItem from "../../navigation-item/navigation-item.component";
import { HighlightOff } from "@mui/icons-material";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const DrawerItems: FC<Props> = ({ isOpen, setIsOpen }) => {
  const pageItems = getAllPageItem();

  return (
    <StyledWrapper
      open={isOpen}
      anchor="top"
      onClose={() => setIsOpen(false)}
      transitionDuration={300}
    >
      <Grid container className="drawer-items--grid-container" spacing={3}>
        <Grid item className="drawer-items--grid-item">
          <HighlightOff
            className="drawer-items--highight-off-icon"
            onClick={() => setIsOpen(false)}
          />
        </Grid>
        {pageItems.map((pageItem, index) => (
          <Grid item key={index} className="drawer-items--grid-item">
            <NavigationItem item={pageItem} onClickItem={() => setIsOpen(false)} />
          </Grid>
        ))}
      </Grid>
    </StyledWrapper>
  );
};

export default DrawerItems;
