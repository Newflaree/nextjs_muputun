export class SwaggerUiHtmlRenderer {
  render(openApiUrl: string): string {
    return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Muputun API Docs</title>
    <link rel="stylesheet" href="/api/_docs/assets/swagger-ui.css" />
    <style>
      body { margin: 0; background: #f7f7f7; }
      .swagger-ui .topbar { display: none; }
    </style>
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="/api/_docs/assets/swagger-ui-bundle.js"></script>
    <script src="/api/_docs/assets/swagger-ui-standalone-preset.js"></script>
    <script>
      window.onload = function () {
        window.ui = SwaggerUIBundle({
          url: '${openApiUrl}',
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          layout: 'StandaloneLayout',
          tryItOutEnabled: true
        });
      };
    </script>
  </body>
</html>`;
  }
}
