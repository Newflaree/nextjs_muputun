import fs from "fs";
import path from "path";

import type { ContactMessageDto } from "@/application/contact";

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const createContactEmailTemplate = (message: ContactMessageDto) => {
  const templatePath = path.join(process.cwd(), "email", "emailTemplate.html");

  return fs
    .readFileSync(templatePath, "utf8")
    .replace("{{name}}", escapeHtml(message.name))
    .replace("{{lastName}}", escapeHtml(message.lastName))
    .replace("{{emailAddress}}", escapeHtml(message.emailAddress))
    .replace("{{subject}}", escapeHtml(message.subject))
    .replace("{{message}}", escapeHtml(message.message));
};

