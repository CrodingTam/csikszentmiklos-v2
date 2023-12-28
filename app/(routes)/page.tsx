import { Grid } from "@mui/material";
import Container from "../components/container/component";
import BannerHeader from "../components/banner-header/component";

const Home = () => {
  return (
    <>
      <BannerHeader />
      <Container>
        <Grid container>Home page</Grid>
      </Container>
    </>
  );
};

export default Home;
