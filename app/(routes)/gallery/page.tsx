import Header from "@/app/components/common-header/component";
import GalleryCards from "./_components/gallery-cards/component";
import Container from "@/app/components/container/component";

const Gallery = () => {
  return (
    <>
      <Header text="Get to know our community through images" />
      <Container>
        <GalleryCards />
      </Container>
    </>
  );
};

export default Gallery;
