import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, Typography } from "@mui/material";

type Props = {
  text: string;
};

const CommonHeader: FC<Props> = ({ text }) => {
  return (
    <StyledWrapper container>
      <Grid item className="title-item">
        <Typography variant="h2">{text}</Typography>
      </Grid>
    </StyledWrapper>
  );
};

export default CommonHeader;
