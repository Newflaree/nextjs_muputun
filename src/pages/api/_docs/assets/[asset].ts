import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import { SwaggerUiAssetProvider } from '@/infrastructure/openapi';

const swaggerUiAssetProvider = new SwaggerUiAssetProvider();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const assetName = Array.isArray(req.query.asset) ? req.query.asset[0] : req.query.asset;

  if (!assetName) {
    return res.status(404).json({
      ok: false,
      message: 'Swagger UI asset not found.',
    });
  }

  try {
    const content = await swaggerUiAssetProvider.read(assetName);

    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Content-Type', swaggerUiAssetProvider.getContentType(assetName));

    return res.status(200).send(content);
  } catch {
    return res.status(404).json({
      ok: false,
      message: 'Swagger UI asset not found.',
    });
  }
}
