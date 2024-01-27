import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, SxProps, Theme, Typography } from "@mui/material";

type Props = {
  text: string;
  sx?: SxProps<Theme>;
  type: "component" | "page";
};

const CommonHeader: FC<Props> = ({ text, sx, type }) => {
  return (
    <StyledWrapper type={type} container sx={{ ...sx }}>
      <Grid item className="title-item">
        <Typography variant="h2">{text}</Typography>
      </Grid>
    </StyledWrapper>
  );
};

export default CommonHeader;
