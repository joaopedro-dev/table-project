import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Head from 'next/dist/shared/lib/head'
import Cards from '../src/components/Cards'
import Foot from '../src/components/Foot'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Table | Home</title>
        <meta name="description" content="Table Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>
        <h1 className={styles.title_dash}>
          Seja Bem Vindo !
        </h1>
        <Cards />
        <Foot />
      </div>
    </div>
  )
}
