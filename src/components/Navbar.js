import styles from '../../styles/components/Navbar.module.css'
import Image from 'next/image'

function Navbar() {
    return (
        <div className={styles.container}>

            <div className={styles.logo}>
                <p className={styles.item_logo}>
                    Table
                </p>
                <Image src="/octopus.png" alt="Logo" width={40} height={40} />
            </div>

            <div>
                <p className={styles.title_item}>
                <Image src="/home.png" alt="Logo" width={14} height={14} />
                    Table Consults
                </p>
                <a className={styles.item}>Home</a>
                <a className={styles.item}>About us</a>
            </div>

            <div>   
                <div>
                <p className={styles.title_item}>
                <Image src="/phone.png" alt="Logo" width={14} height={14} />
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