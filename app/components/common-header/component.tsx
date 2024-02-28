import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, SxProps, Theme, Typography } from "@mui/material";

type Props = {
  text: string;
  sx?: SxProps<Theme>;
  titleVariant?: "h1" | "h2";
};

const CommonHeader: FC<Props> = ({ text, sx, titleVariant }) => {
  return (
    <StyledWrapper container sx={{ ...sx }}>
      <Grid item className="title-item">
        <Typography variant={titleVariant ?? "h2"}>{text}</Typography>
      </Grid>
    </StyledWrapper>
  );
};

export default CommonHeader;
