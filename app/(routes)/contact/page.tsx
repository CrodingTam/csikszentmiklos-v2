import Container from "@/app/components/container/component";
import ContactCard from "./_components/contact-card/contact-card.component";
import GoogleMap from "./_components/google-map/component";

const Contact = () => {
  return (
    <Container>
      <ContactCard />
      <GoogleMap />
    </Container>
  );
};

export default Contact;
