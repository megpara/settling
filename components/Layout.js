import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Megan Paradowski</title>
        <meta
          name="description"
          content="A Los Angeles based choreographer and movement director"
        />
        <meta property="og:title" content="Megan Paradowski" key="ogtitle" />
        <meta
          property="og:description"
          content="A Los Angeles based choreographer and movement director"
          key="ogdesc"
        />
        <meta property="og:image" content="/index2.png" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700;800&family=Montserrat:wght@200;300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="stylesheet" href="https://use.typekit.net/uyy5sgw.css" />
        <link rel="stylesheet" href="https://use.typekit.net/mwq0bcv.css" />
        <link rel="stylesheet" href="https://use.typekit.net/djh6oaj.css" />
      </Head>
      {children}
    </div>
  );
}
