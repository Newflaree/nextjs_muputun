import type { NextApiRequest, NextApiResponse } from "next";

import { sendContactMessageUseCase } from "@/application/contact";
import { messages, statusCodes } from "@/core/http";
import { consoleErrorHandler } from "@/core/logger";
import { nodemailerContactEmailAdapter } from "@/infrastructure/contact";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(statusCodes.BAD_REQUEST).json({
      ok: false,
      message: messages.INVALID_ENDPOINT,
    });
  }

  try {
    const result = await sendContactMessageUseCase(
      req.body,
      nodemailerContactEmailAdapter,
    );

    return res.status(statusCodes.SUCCESS).json(result);
  } catch (error) {
    consoleErrorHandler(error, "contactEmailApiHandler");

    return res.status(statusCodes.SERVER_ERROR).json({
      ok: false,
      message: messages.SEND_EMAIL_ERROR,
    });
  }
}

