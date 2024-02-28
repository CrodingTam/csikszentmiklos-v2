import { FC } from "react";
import StyledWrapper from "./availability.style";
import { Box, Typography } from "@mui/material";
import Img from "@/app/components/image/component";

type AvailabilityItem = {
  src: string;
  alt: string;
  text: string;
  name: string;
};

const availabilityItems: AvailabilityItem[] = [
  { src: "/images/mail.png", alt: "mail-icon", text: "csikszentmiklos@gmail.com", name: "E-mail" },
  {
    src: "/images/phone.png",
    alt: "phone-icon",
    text: "0266 346 415",
    name: "Telephone number",
  },
  {
    src: "/images/location.png",
    alt: "location-icon",
    text: "Romania, Nicolești (Frumoasa), 246.",
    name: "Address",
  },
  {
    src: "/images/phone_call.png",
    alt: "phone-call-icon",
    text: "8:00-14:00",
    name: "Reachability",
  },
  {
    src: "/images/letter.png",
    alt: "letter-icon",
    text: "537118",
    name: "Postal code",
  },
];

const Availability: FC = () => {
  return (
    <StyledWrapper>
      {availabilityItems.map((item, index) => (
        <Box key={index} className="item-box">
          <Img className="icon" src={item.src} alt={item.alt} width={25} height={25} />
          <Typography variant="mainBold">{item.name}:</Typography>
          <Typography variant="mainMedium">{item.text}</Typography>
        </Box>
      ))}
      <Img
        className="house-box"
        src="/images/drawn_house.png"
        alt="drawn-house"
        width={150}
        height={150}
      />
    </StyledWrapper>
  );
};
export default Availability;
