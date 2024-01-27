"use server";

import nodemailer from "nodemailer";

export type EmailFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (formData: EmailFormData): Promise<"success" | "error"> => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (e) {
    console.error(e);
    return "error";
  }

  try {
    await transport.sendMail({
      from: formData.email,
      to: SMTP_EMAIL,
      replyTo: formData.email,
      subject: `Csíkszentmiklós weboldala`,
      html: `<div><h1>Név</h1><p>${formData.name}</p><h1>E-mail</h1><p>${formData.email}</p><h1>Üzenet</h1><p>${formData.message}</p></div>`,
    });
    return "success";
  } catch (e) {
    console.error(e);
    return "error";
  }
};
