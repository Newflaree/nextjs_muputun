import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import { SwaggerUiHtmlRenderer } from '@/infrastructure/openapi';

const swaggerUiHtmlRenderer = new SwaggerUiHtmlRenderer();

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  return res.status(200).send(swaggerUiHtmlRenderer.render('/api/_docs/openapi.json'));
}
