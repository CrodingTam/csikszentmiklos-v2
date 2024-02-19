import { FC } from "react";
import StyledWrapper from "./associations.style";
import CommonHeader from "@/app/components/common-header/component";
import Item from "./item/item.component";
import { Grid } from "@mui/material";
import { associationItems } from "@/app/constants/association-items.constant";

const Associations: FC = () => {
  return (
    <>
      <CommonHeader text="Associations of our community" />
      <StyledWrapper spacing={3} container className="associations--grid-container">
        {associationItems.map((item, index) => (
          <Grid key={index} lg={4} md={6} sm={8} xxs={12} item className="associations--grid-item">
            <Item association={item} />
          </Grid>
        ))}
      </StyledWrapper>
    </>
  );
};

export default Associations;
