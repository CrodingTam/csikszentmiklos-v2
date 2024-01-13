import Header from "@/app/components/common-header/component";
import { Container, Grid } from "@mui/material";
import GalleryCards from "./_components/gallery-card/component";

const Gallery = () => {
  return (
    <>
      <Header
        text="Get to know our community through images"
        sx={{ marginTop: "180px !important" }}
      />
      <Container>
        <GalleryCards />
      </Container>
    </>
  );
};

export default Gallery;
