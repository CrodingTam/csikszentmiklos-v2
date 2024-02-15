import CommonHeader from "@/app/components/common-header/component";
import Container from "@/app/components/container/component";
import GalleryImages from "./_components/gallery-images/component";

const Gallery = () => {
  return (
    <>
      <CommonHeader text="Moments of our community" />
      <Container>
        <GalleryImages />
      </Container>
    </>
  );
};

export default Gallery;
