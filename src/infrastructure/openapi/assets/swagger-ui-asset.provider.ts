import { readFile } from 'fs/promises';
import path from 'path';
import { getAbsoluteFSPath } from 'swagger-ui-dist';

type SwaggerUiAsset = {
  contentType: string;
  fileName: string;
};

export class SwaggerUiAssetProvider {
  private readonly assets = new Map<string, SwaggerUiAsset>([
    [
      'swagger-ui.css',
      {
        contentType: 'text/css; charset=utf-8',
        fileName: 'swagger-ui.css',
      },
    ],
    [
      'swagger-ui-bundle.js',
      {
        contentType: 'application/javascript; charset=utf-8',
        fileName: 'swagger-ui-bundle.js',
      },
    ],
    [
      'swagger-ui-standalone-preset.js',
      {
        contentType: 'application/javascript; charset=utf-8',
        fileName: 'swagger-ui-standalone-preset.js',
      },
    ],
  ]);

  async read(assetName: string): Promise<Buffer> {
    const asset = this.assets.get(assetName);

    if (!asset) {
      throw new Error('Swagger UI asset not found.');
    }

    return readFile(path.join(getAbsoluteFSPath(), asset.fileName));
  }

  getContentType(assetName: string): string {
    const asset = this.assets.get(assetName);

    if (!asset) {
      throw new Error('Swagger UI asset not found.');
    }

    return asset.contentType;
  }
}
