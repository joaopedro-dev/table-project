import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Dash from '../src/components/Dash'
import Head from 'next/dist/shared/lib/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Table | Home</title>
        <meta name="description" content="Table Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Dash />
    </div>
  )
}
