import { FC } from "react";
import StyledWrapper from "./item.style";
import { Box, Grid, Typography } from "@mui/material";

export type FooterItem = {
  label: string;
  description: string;
};

type Props = {
  items: FooterItem[];
  title: string;
};

const Items: FC<Props> = ({ items, title }) => {
  return (
    <StyledWrapper>
      <Typography variant="subtitle1" className="footer-items--typography title">
        {title}
      </Typography>
      <Box className="footer-items--box">
        <Grid container className="footer-items--grid-container">
          {items.map((item, index) => (
            <Grid item key={index} className="footer-items--grid-item">
              <Typography variant="mainSemiBold" className="footer-items--typography">
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledWrapper>
  );
};

export default Items;
