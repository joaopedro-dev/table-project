import styles from '../../styles/components/Dash.module.css'
import Foot from './Foot'
import Header from './Header'

function Dash() {
  return (
    <div className={styles.main}>
      <Header/>
      <Foot/>
    </div>
  )
}

export default Dash