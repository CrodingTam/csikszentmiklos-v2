import { FC } from "react";
import StyledWrapper from "./style";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";

const ScrollDownArrow: FC = () => {
  return (
    <StyledWrapper container>
      <Grid item className="arrow-item">
        <Box className="arrow-box">
          <KeyboardArrowDown />
        </Box>
        <Box className="arrow-background zoomer" />
      </Grid>
    </StyledWrapper>
  );
};

export default ScrollDownArrow;
