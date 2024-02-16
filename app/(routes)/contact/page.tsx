import Container from "@/app/components/container/component";
import ContactCard from "./_components/contact-card/contact-card.component";
import CommonHeader from "@/app/components/common-header/component";
import GoogleMap from "./_components/google-map/component";

const Contact = () => {
  return (
    <>
      <CommonHeader text="Contact us" />
      <Container>
        <ContactCard />
        <GoogleMap />
      </Container>
    </>
  );
};

export default Contact;
