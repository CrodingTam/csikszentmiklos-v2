import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import StyledWrapper from "./style";

const PhotoAlbumImage = ({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) => {
  return (
    <StyledWrapper style={{ ...wrapperStyle }}>
      <Image
        priority
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </StyledWrapper>
  );
};

export default PhotoAlbumImage;
