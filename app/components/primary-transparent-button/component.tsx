"use client";

import { Button, SxProps, Theme, Typography } from "@mui/material";
import { FC } from "react";

type Props = {
  text: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  marginTop?: string;
  className?: string;
  paddingTop?: string;
  sx?: SxProps<Theme>;
  type?: "submit" | "reset" | "button";
};

const PrimaryTransparentButton: FC<Props> = ({
  text,
  onClick = () => {},
  width,
  height,
  marginTop,
  className,
  sx,
  type,
}) => {
  return (
    <Button
      className={className}
      variant="outlined"
      onClick={onClick}
      type={type}
      sx={{
        "&:hover": {
          backgroundColor: "primary.main",
          color: "white.main",
          borderWidth: "2px",
          borderColor: "primary.main",
        },
        borderWidth: "2px",
        borderRadius: "5px",
        height: height ?? "44px",
        width: width ?? "60px",
        marginTop: marginTop ?? 0,
        borderColor: "primary.main",
        ...sx,
      }}
    >
      <Typography variant="mainBold" sx={{ fontSize: 14 }}>
        {text}
      </Typography>
    </Button>
  );
};

export default PrimaryTransparentButton;
