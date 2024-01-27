"use client";

import { CircularProgress, SxProps, Theme } from "@mui/material";
import NextImage from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import { DateTime } from "luxon";
import StyledWrapper from "./style";
import { RenderPhotoProps } from "react-photo-album";

interface ImageDimensions {
  width: number;
  height: number;
}

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  objectPosition?: "bottom" | "top" | "unset" | "center" | "left" | "right";
  onClick?: () => void;
  disableVersion?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

const Img: FC<Props> = ({
  src,
  width = 0,
  height,
  sx = {},
  objectFit = "contain",
  objectPosition = "unset",
  alt,
  disableVersion = false,
  className,
  onClick,
  icon,
}) => {
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);

  const getImageDimensions = useCallback(async (): Promise<ImageDimensions> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };

      img.onerror = reject;
    });
  }, [src]);

  useEffect(() => {
    (async () => {
      const result: ImageDimensions = await getImageDimensions();
      if (!width && !height) {
        setDimensions({
          width: result.width,
          height: result.height,
        });
      } else {
        if (height && width) {
          setDimensions({
            width,
            height,
          });
        } else if (width && !height) {
          setDimensions({
            width,
            height: (width * result.height) / result.width,
          });
        } else if (!width && height) {
          setDimensions({
            width: (height * result.width) / result.height,
            height,
          });
        }
      }
    })();
  }, [getImageDimensions, width, height]);

  if (dimensions === null) {
    return <CircularProgress size={20} />;
  }

  return (
    <StyledWrapper
      className={className}
      sx={{
        width: dimensions.width,
        height: dimensions.height,
        ...sx,
      }}
      onClick={onClick}
    >
      {/* disable version */}
      {/* src={disableVersion ? src : `${src}?v=${DateTime.now().toMillis()}`} */}
      <NextImage
        priority
        src={src}
        alt={alt}
        fill
        sizes="100%"
        style={{
          objectFit: objectFit,
          objectPosition: objectPosition,
        }}
      />
      {icon}
    </StyledWrapper>
  );
};

export default Img;
