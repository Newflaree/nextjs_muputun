import type { NextApiRequest } from 'next';
import crypto from 'crypto';

export class RequestIdResolver {
  resolve(req: NextApiRequest): string {
    const headerRequestId = req.headers['x-request-id'];

    if (typeof headerRequestId === 'string' && headerRequestId.trim()) {
      return headerRequestId;
    }

    return crypto.randomUUID();
  }
}
