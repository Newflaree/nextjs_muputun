import type { ContactMessageDto } from "../dto/contact-message.dto";

export type ContactEmailPort = {
  sendContactMessage(message: ContactMessageDto): Promise<void>;
};

