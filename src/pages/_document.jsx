// Next.js
import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';


class MyDocument extends Document {
  static async getInitialProps( ctx ) {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: ( App ) => App,
        enhanceComponent: ( Component ) => Component,
      });

    const initialProps = await Document.getInitialProps( ctx )

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
