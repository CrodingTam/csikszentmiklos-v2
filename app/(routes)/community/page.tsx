import Container from "@/app/components/container/component";
import Associations from "./associations/associations.component";
import { EventCardModel } from "@/app/models/event-card.model";
import EventCards from "@/app/components/event-cards/event-cards.component";
import News from "./news/news.component";

const Community = () => {
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

  return (
    <Container>
      <Associations />
      <EventCards cards={staticEventCards} />
      <News />
    </Container>
  );
};

export default Community;
