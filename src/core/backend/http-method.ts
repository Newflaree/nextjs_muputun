import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import { ApiResponseSender } from './api-response';

export class HttpMethodGuard {
  constructor(private readonly responseSender: ApiResponseSender) {}

  require(
    req: NextApiRequest,
    res: NextApiResponse,
    method: string,
    requestId: string,
  ): boolean {
    if (req.method === method) return true;

    this.responseSender.sendError(res, {
      code: 'METHOD_NOT_ALLOWED',
      message: 'Método no permitido.',
      requestId,
      statusCode: 405,
    });

    return false;
  }
}
