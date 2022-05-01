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

            <p>Table Consults</p>
            <div className={styles.item}>
                <a>Home</a>
                <a>About us</a> 
            </div>

            <p>Ligação</p>
            <div className={styles.item}>
                <a>Cliente</a>
                <a>Terceiro</a>
                <a>Recado</a>
            </div>
        </div>
    )
}

export default Navbar