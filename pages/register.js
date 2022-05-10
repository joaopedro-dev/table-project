import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Head from 'next/dist/shared/lib/head'
import RegisterMenu from '../src/components/RegisterMenu'
import Foot from '../src/components/Foot'

export default function Register() {
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
          Registrar Ligação !
        </h1>        <RegisterMenu />
        <Foot />
      </div>
    </div>
  )
}
