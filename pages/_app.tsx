import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>SLRV Framework</title>
      <meta
        name="description"
        content="SLRV (Semantic Laundering & Responsibility Vacuum) is a diagnostic and normative framework for AI-assisted systems."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SLRV Framework" />
      <meta
        name="twitter:description"
        content="SLRV defines admissibility boundaries for evidence and responsibility in agent systems."
      />
      <meta name="twitter:image" content="/og.png" />
      <meta name="twitter:domain" content="slrv.md" />
      <meta name="twitter:url" content="https://slrv.md" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="SLRV Framework" />
      <meta
        property="og:description"
        content="SLRV defines admissibility boundaries for evidence and responsibility in agent systems."
      />
      <meta property="og:image" content="/og.png" />
    </Head>
    <Component {...pageProps} />
  </>;
}
