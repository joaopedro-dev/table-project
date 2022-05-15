import styles from "../../styles/RegistrarLigacao.module.css";
import Navbar from "../../src/components/Navbar";
import Head from "next/dist/shared/lib/head";
import Foot from "../../src/components/Foot";
import PrevCenter from "../../src/components/CallCenter";

export default function Preventivo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Table | Home</title>
        <meta name="description" content="Table Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <PrevCenter/>
        <Foot />
      </div>
    </div>
  );    
}