import styles from '../styles/Home.module.css'
import Navbar from '../src/components/navbar'
import Dash from '../src/components/Dash'
import Foot from '../src/components/Foot'

export default function Home() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <Dash/>
    </div>
  )
}
