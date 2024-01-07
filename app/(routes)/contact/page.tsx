import Container from "@/app/components/container/component";
import ContactCard from "./_components/contact-card/component";
import Header from "@/app/components/common-header/component";
import GoogleMap from "./_components/google-map/component";

const Contact = () => {
  return (
    <>
      <Header text="Contact us" sx={{ marginTop: "180px !important" }} isPage />
      <Container>
        <ContactCard />
        <GoogleMap />
      </Container>
    </>
  );
};

export default Contact;
