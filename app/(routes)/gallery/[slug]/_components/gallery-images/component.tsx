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
import NextJsImage from "./lightbox-image/component";
import AlbumNextJsImage from "./album-image/component";
import { CircularProgress, Grid } from "@mui/material";

const GalleryImages: FC = () => {
  const [index, setIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <StyledWrapper container>
      {loading && <CircularProgress />}
      <Grid item sx={{ width: "100%", height: "100%" }} onLoad={() => setLoading(false)}>
        <PhotoAlbum
          layout="rows"
          targetRowHeight={300}
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          renderPhoto={AlbumNextJsImage}
        />
      </Grid>

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage, thumbnail: NextJsImage }}
        plugins={[Slideshow, Thumbnails, Zoom]}
      />
    </StyledWrapper>
  );
};

export default GalleryImages;
