import { FC } from "react";
import StyledWrapper from "./scroll-down-arrow.style";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box } from "@mui/material";

const ScrollDownArrow: FC = () => {
  return (
    <StyledWrapper className="scroll-down-arrow--box">
      <Box className="scroll-down-arrow--box">
        <KeyboardArrowDown />
      </Box>
      <Box className="scroll-down-arrow--box zoomer" />
    </StyledWrapper>
  );
};

export default ScrollDownArrow;
