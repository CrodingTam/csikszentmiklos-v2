import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, Typography } from "@mui/material";
import { PopupItemModel } from "@/app/models/popup-item.model";

type Props = {
  items: PopupItemModel[];
};

const PopupItems: FC<Props> = ({ items }) => {
  return (
    <StyledWrapper container className="popup-items-container">
      {items.map((item, index) => (
        <Grid item key={index}>
          <Typography variant="mainSemiBold">{item.name}</Typography>
        </Grid>
      ))}
    </StyledWrapper>
  );
};

export default PopupItems;
