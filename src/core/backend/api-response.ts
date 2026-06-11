import type { NextApiResponse } from 'next';

export class ApiResponseSender {
  sendSuccess<TData>(
    res: NextApiResponse,
    data: TData,
    statusCode = 200,
    meta: Record<string, unknown> = {},
  ) {
    return res.status(statusCode).json({
      ok: true,
      data,
      meta,
    });
  }

  sendError(
    res: NextApiResponse,
    {
      code,
      message,
      requestId,
      statusCode,
    }: {
    code: string;
    message: string;
    requestId: string;
    statusCode: number;
    },
  ) {
    return res.status(statusCode).json({
      ok: false,
      code,
      message,
      requestId,
    });
  }
}
