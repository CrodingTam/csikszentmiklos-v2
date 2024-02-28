import { FC } from "react";
import StyledWrapper from "./contact-card.style";
import { Grid } from "@mui/material";
import ContactUs from "../contact-us/component";
import Availability from "../availability/availability.component";

const ContactCard: FC = () => {
  return (
    <StyledWrapper container>
      <Grid xxs={6} item className="contact-form">
        <ContactUs />
      </Grid>
      <Grid xxs={6} item className="contact-info">
        <Availability />
      </Grid>
    </StyledWrapper>
  );
};

export default ContactCard;
