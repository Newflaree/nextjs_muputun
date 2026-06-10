import type { ContactMessageDto } from "../dto/contact-message.dto";
import type { ContactEmailPort } from "../ports/contact-email.port";

export type SendContactMessageResult = {
  ok: boolean;
  message: string;
};

export const sendContactMessageUseCase = async (
  contactMessage: ContactMessageDto,
  emailPort: ContactEmailPort,
): Promise<SendContactMessageResult> => {
  await emailPort.sendContactMessage(contactMessage);

  return {
    ok: true,
    message: "Mensaje enviado con exito",
  };
};

