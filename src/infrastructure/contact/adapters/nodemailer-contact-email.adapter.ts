import nodemailer from "nodemailer";

import type { ContactEmailPort, ContactMessageDto } from "@/application/contact";
import { createContactEmailTemplate } from "../services/contact-email-template.service";

export const nodemailerContactEmailAdapter: ContactEmailPort = {
  async sendContactMessage(message: ContactMessageDto) {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      replyTo: message.emailAddress,
      to: process.env.EMAIL_USERNAME,
      subject: `Asunto: ${message.subject}`,
      html: createContactEmailTemplate(message),
    });
  },
};

