import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta property="og:title" content="Settling" key="ogtitle" />
        <meta
          property="og:description"
          content="A new show"
          key="ogdesc"
        />
        <meta property="og:image" content="/og_header.png" />
        <link rel="icon" href="/SETTLING_FLAVACON.png" />
        <link rel="preload" href="/SETTLING_1.jpg" as="image" />
        <link rel="preload" href="/SETTLING_2.jpg" as="image" />
        <link rel="preload" href="/SETTLING_3.1.jpg" as="image" />
        <link rel="preload" href="/SETTLING_3.2.jpg" as="image" />
        <link rel="preload" href="/SETTLING_3.3.jpg" as="image" />
        <link rel="preload" href="/SETTLING_4.1.jpg" as="image" />
        <link rel="preload" href="/SETTLING_4.2.jpg" as="image" />
        <link rel="preload" href="/SETTLING_5.jpg" as="image" />
        <link rel="preload" href="/SETTLING_7.jpg" as="image" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
