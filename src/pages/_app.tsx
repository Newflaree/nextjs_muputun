import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider } from "@/presentation/auth";
import {
  PageTransition,
  ScrollReveal,
} from "@/presentation/shared";
import "@/styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <AuthProvider>
        <div
          key={ router.asPath }
          className='page-route-shell'
        >
          <Component {...pageProps} />
        </div>
        <ScrollReveal />
        <PageTransition />
      </AuthProvider>
    </>
  );
}
