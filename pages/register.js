import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Dash from '../src/components/Dash'
import Head from 'next/dist/shared/lib/head'
import RegisterMenu from '../src/components/RegisterMenu'

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Table | Registrar Ligação</title>
        <meta name="description" content="Registrar Ligação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <RegisterMenu/>
    </div>
  )
}