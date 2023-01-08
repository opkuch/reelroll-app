import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ReelRoll 2023</title>
        <link rel="favicon" href="../utils/reelroll-logo.svg" type="image/icon type" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
