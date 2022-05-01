import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Dash from '../src/components/Dash'

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <Dash/>
    </div>
  )
}
