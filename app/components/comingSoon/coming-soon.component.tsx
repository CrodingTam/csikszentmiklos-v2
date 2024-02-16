import { FC } from "react";
import { Typography, Button } from "@mui/material";

type Props = {
  onOkClick: () => void;
};
const ComingSoon: FC<Props> = ({ onOkClick }) => {
  return (
    <Button
      variant="outlined"
      onClick={onOkClick}
      sx={{
        borderWidth: "2px",
        borderColor: "primary.main",
        "&:hover": {
          borderWidth: "2px",
          backgroundColor: "primary.main",
          color: "white.main",
        },
      }}
    >
      <Typography variant="mainSemiBold">Ok</Typography>
    </Button>
  );
};

export default ComingSoon;
