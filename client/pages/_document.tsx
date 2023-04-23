import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#2D3142" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://medranostaqueria.com/" />
        <link rel="icon" type="image/x-icon" href="/images/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
