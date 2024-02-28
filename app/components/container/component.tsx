import { FC, ReactNode } from "react";
import StyledWrapper from "./style";
import { SxProps, Theme } from "@mui/material";

type Props = {
  children: ReactNode;
  sx?: SxProps<Theme>;
};

const CommonContainer: FC<Props> = ({ children, sx }) => {
  return (
    <StyledWrapper className="common-container" sx={{ ...sx }}>
      {children}
    </StyledWrapper>
  );
};

export default CommonContainer;
