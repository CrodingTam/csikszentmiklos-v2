"use client";
import React, { FC, useRef, useState } from "react";
import { TextField, CircularProgress, Typography, Box } from "@mui/material";
import PrimaryTransparentButton from "@/app/components/primary-transparent-button/component";
import StyledWrapper from "./style";
import Img from "@/app/components/image/component";
import { EmailFormData, sendEmail } from "@/app/api/services/mail.service";
import { enqueueSnackbar } from "notistack";

const ContactUs: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  let nameRef = useRef<HTMLInputElement>(null);
  let emailRef = useRef<HTMLInputElement>(null);
  let messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    setLoading(true);
    e.preventDefault();
    const formData: EmailFormData = {
      name: nameRef.current?.querySelector("input")?.value || "",
      email: emailRef.current?.querySelector("input")?.value || "",
      message: messageRef.current?.value || "",
    };
    const result = await sendEmail(formData);
    if (result === "success") {
      nameRef.current!.querySelector("input")!.value = "";
      emailRef.current!.querySelector("input")!.value = "";
      messageRef.current!.value = "";
      enqueueSnackbar("E-mail sent succesfully!", { variant: "success" });
    } else {
      enqueueSnackbar("E-mail sent succesfully!", { variant: "success" });
    }
    setLoading(false);
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit} className="contact-us-form">
        <Box className="input-wrapper">
          <Img src="/images/user.png" alt="user-icon" width={25} height={25} />
          <TextField
            className="input-field"
            fullWidth
            label={
              <Typography className="input-text" variant="mainSemiBold">
                Name
              </Typography>
            }
            name="name"
            variant="outlined"
            ref={nameRef}
            required
            inputProps={{ maxLength: 37 }}
          />
        </Box>
        <Box className="input-wrapper">
          <Img src="/images/user_mail.png" alt="user-email-icon" width={25} height={25} />
          <TextField
            className="input-field"
            fullWidth
            label={
              <Typography className="input-text" variant="mainSemiBold">
                Email
              </Typography>
            }
            name="email"
            variant="outlined"
            ref={emailRef}
            required
            type="email"
            inputProps={{ maxLength: 37 }}
          />
        </Box>
        <Box className="input-wrapper">
          <Img src="/images/message.png" alt="message-icon" width={25} height={25} />
          <TextField
            fullWidth
            className="input-field text-area"
            label={
              <Typography className="input-text" variant="mainSemiBold">
                Message
              </Typography>
            }
            name="message"
            inputRef={messageRef}
            multiline
            variant="outlined"
            required
          />
        </Box>

        {loading ? (
          <CircularProgress />
        ) : (
          <PrimaryTransparentButton
            text="Send Message"
            type="submit"
            width="fit-content"
            height="51px"
          />
        )}
      </form>
    </StyledWrapper>
  );
};

export default ContactUs;
