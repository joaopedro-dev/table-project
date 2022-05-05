import styles from '../../styles/components/Navbar.module.css'
import Image from 'next/image'

function Navbar() {
    return (
        <div className={styles.container}>
            <div> 
                <div className={styles.logo}>
                    <Image src="/magic.png" alt="Logo" width={70} height={70} />
                    <p className={styles.item_logo}>
                        Table
                    </p>
                </div>  
                    <div>
                    <p className={styles.title_item}>
                        Registrar Ligação
                    </p>  
                    </div>
                    <a className={styles.item}>Cliente</a>
                    <a className={styles.item}>Terceiro</a>
                    <a className={styles.item}>Preventivo</a>
            </div>
            <div>
                <a className={styles.about}>About us</a>
            </div>

        </div>
    )
}

export default Navbar