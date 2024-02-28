import Container from "../components/container/component";
import BannerHeader from "../components/banner-header/banner-header.component.tsx";
import Events from "./_components/events/events.component";
import Introduction from "./_components/introduction/introduction.component";
import Curiosities from "./_components/curiosities/curoisities.component";

const Home = () => {
  return (
    <>
      <BannerHeader />
      <Container>
        <Introduction />
        <Events />
        <Curiosities />
      </Container>
    </>
  );
};

export default Home;
