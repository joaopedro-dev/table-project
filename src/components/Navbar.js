import styles from '../../styles/components/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/">
                    <a className={styles.logo}>
                        <Image src="/magic.png" alt="Logo" width={70} height={70} />
                        <p className={styles.item_logo}>
                            Table
                        </p>
                    </a>
                </Link>
                <Link href="/register">
                    <a className={styles.title_item}>
                        Registrar Ligação
                    </a>
                </Link>
                <p className={styles.item}>Cliente</p>
                <p className={styles.item}>Terceiro</p>
                <p className={styles.item}>Preventivo</p>
            </div>
            <div>
                <a className={styles.about}>About us</a>
            </div>

        </div>
    )
}

export default Navbar