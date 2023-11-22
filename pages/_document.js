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
