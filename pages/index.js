import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Head from 'next/dist/shared/lib/head'
import Header from '../src/components/Header'
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
      <Navbar/>
      <div className={styles.main}>
        <Header/>
        <Cards/>
        <Foot/>
      </div>
    </div>
  )
}
