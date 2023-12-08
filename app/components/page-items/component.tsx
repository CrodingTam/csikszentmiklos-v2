import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, Typography } from "@mui/material";
import { PageItemModel } from "@/app/models/page.model";

type Props = {
  items: PageItemModel[];
};

const PageItems: FC<Props> = ({ items }) => {
  return (
    <StyledWrapper container className="page-items-container">
      {items.map((item, index) => (
        <Grid item key={index}>
          <Typography variant="mainSemiBold">{item.label}</Typography>
        </Grid>
      ))}
    </StyledWrapper>
  );
};

export default PageItems;
