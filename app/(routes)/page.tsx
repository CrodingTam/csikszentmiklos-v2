import { Grid } from "@mui/material";
import Container from "../components/container/component";
import BannerHeader from "../components/banner-header/component";
import Events from "./_components/events/component";

const Home = () => {
  return (
    <>
      <BannerHeader />
      <Container>
        <Events />
      </Container>
    </>
  );
};

export default Home;
