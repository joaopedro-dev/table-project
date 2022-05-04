import styles from '../../styles/components/Navbar.module.css'
import Image from 'next/image'

function Navbar() {
    return (
        <div className={styles.container}>

            <div className={styles.logo}>
                <Image src="/magic.png" alt="Logo" width={60} height={60} />
                <p className={styles.item_logo}>
                    Table
                </p>
            </div>

            <div>
                <p className={styles.title_item}>
                    Table Consults
                </p>
                <a className={styles.item}>About us</a>
            </div>

            <div>   
                <div>
                <p className={styles.title_item}>
                    Ligação
                </p>  
                </div>
                <a className={styles.item}>Cliente</a>
                <a className={styles.item}>Terceiro</a>
                <a className={styles.item}>Preventivo</a>
            </div>

        </div>
    )
}

export default Navbar