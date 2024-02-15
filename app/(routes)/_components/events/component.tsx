import { FC } from "react";
import StyledWrapper from "./style";
import { Grid } from "@mui/material";
import { EventCardModel } from "@/app/models/event-card.model";
import CommonHeader from "@/app/components/common-header/component";
import EventCards from "@/app/components/event-cards/event-cards.component";

//static data temporarily
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

const Events: FC = () => {
  return (
    <>
      <CommonHeader text="Upcoming Events" type="component" />
      <StyledWrapper container>
        <Grid item className="event-card-item">
          <EventCards cards={staticEventCards} />
        </Grid>
      </StyledWrapper>
    </>
  );
};

export default Events;
