import { FC } from "react";
import StyledWrapper from "./style";
import { Grid, Typography } from "@mui/material";
import EventCards from "@/app/components/event-card/component";
import { EventCardModel } from "@/app/models/event-card.model";
import CommonHeader from "@/app/components/common-header/component";

//static data temporarily
const staticEventCards: EventCardModel[] = [
  {
    eventDate: "2024-02-22",
    logoSrc: "/images/home/sausage_festival_logo.jpg",
    name: "Sausage Festival",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    eventDate: "2024-07-28",
    name: "Battle of the Kitchens",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const Events: FC = () => {
  return (
    <>
      <CommonHeader text="Upcoming Events" />
      <StyledWrapper container>
        <Grid item className="event-card-item">
          <EventCards cards={staticEventCards} />
        </Grid>
      </StyledWrapper>
    </>
  );
};

export default Events;
