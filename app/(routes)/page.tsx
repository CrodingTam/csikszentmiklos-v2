import { Grid } from "@mui/material";
import Container from "../components/container/component";
import BannerHeader from "../components/banner-header/component";
import Events from "./_components/events/component";
import Introduction from "./_components/introduction/component";
import Curiosities from "./_components/curiosities/component";

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
