import Container from "../components/container/component";
import BannerHeader from "../components/banner-header/banner-header.component.tsx";
import Events from "./_components/events/events.component";
import Introduction from "./_components/introduction/introduction.component";
import Curiosities from "./_components/curiosities/curoisities.component";
import { EventCardModel } from "../models/event-card.model";
import EventCards from "../components/event-cards/event-cards.component";

const staticEventCards: EventCardModel[] = [
  {
    eventDate: "2024-02-22",
    logoSrc: "/images/home/sausage_festival_logo.jpg",
    name: "Sausage Festival",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
  },
  {
    eventDate: "2024-07-28",
    name: "Battle of the Kitchens",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
  },
  {
    eventDate: "2024-12-10",
    name: "Wreath Making",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.",
  },
];

const Home = () => {
  return (
    <>
      <BannerHeader />
      <Container>
        <Introduction />
        <EventCards cards={staticEventCards} />
        <Curiosities />
      </Container>
    </>
  );
};

export default Home;
