import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, SxProps, Theme, Typography } from "@mui/material";

type Props = {
  text: string;
  sx?: SxProps<Theme>;
  isPage?: boolean;
};

const CommonHeader: FC<Props> = ({ text, sx, isPage = false }) => {
  return (
    <StyledWrapper container sx={{ ...sx }}>
      <Grid item className="title-item">
        {isPage ? (
          <Typography variant="h1">{text}</Typography>
        ) : (
          <Typography variant="h2">{text}</Typography>
        )}
      </Grid>
    </StyledWrapper>
  );
};

export default CommonHeader;
