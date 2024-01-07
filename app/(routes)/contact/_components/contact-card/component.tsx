import { FC } from "react";
import StyledWrapper from "./style";
import { Grid } from "@mui/material";
import ContactUs from "../contact-us/component";
import Availability from "../availability/component";

const ContactCard: FC = () => {
  return (
    <StyledWrapper container>
      <Grid item className="contact-form">
        <ContactUs />
      </Grid>
      <Grid item className="contact-info">
        <Availability />
      </Grid>
    </StyledWrapper>
  );
};

export default ContactCard;
