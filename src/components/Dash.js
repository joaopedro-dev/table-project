import styles from '../../styles/components/Dash.module.css'
import Foot from './Foot'
import Header from './Header'
import Cards from './Cards'

function Dash() {
  return (
    <div className={styles.main}>
      <Header/>
      <Cards/>
      <Foot/>
    </div>
  )
}

export default Dash