"use client";

import { FC, useState } from "react";
import StyledWrapper from "./style";
import PhotoAlbum from "react-photo-album";
import photos from "../photos/component";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const GalleryImages: FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <StyledWrapper container>
      <PhotoAlbum
        layout="rows"
        targetRowHeight={300}
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Slideshow, Thumbnails, Zoom]}
      />
    </StyledWrapper>
  );
};

export default GalleryImages;
