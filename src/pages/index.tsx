import React from "react";
import Head from "next/head";
import styles from "styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Apex Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
