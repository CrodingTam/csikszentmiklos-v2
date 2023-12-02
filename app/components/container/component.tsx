import { FC, ReactNode } from "react";
import StyledWrapper from "./style";

type Props = {
  children: ReactNode;
};

const CommonContainer: FC<Props> = ({ children }) => {
  return <StyledWrapper className="common-container">{children}</StyledWrapper>;
};

export default CommonContainer;
