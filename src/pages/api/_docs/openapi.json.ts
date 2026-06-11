import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import { PublicApiOpenApiDocument } from '@/infrastructure/openapi';

const publicApiOpenApiDocument = new PublicApiOpenApiDocument();

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store');

  return res.status(200).json(publicApiOpenApiDocument.build());
}
