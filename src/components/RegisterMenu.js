import styles from '../../styles/components/RegisterMenu.module.css'
import Image from 'next/image'
import Link from 'next/link'

function RegisterMenu() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.big_card}>
                    <Image src="/motivation.png" alt="Logo" width={95} height={95} />
                    <p className={styles.text}>
                        “Falei com o cliente”
                    </p>
                </div>
                <div className={styles.row}>
                    <div className={styles.card}>
                        <Image src="/talking.png" alt="Logo" width={80} height={80} />
                        <p className={styles.text}>"Falei com Fulano"</p>
                    </div>

                    <Link href="/register/preventivo">
                        <a className={styles.card_1}>
                            <Image src="/king.png" alt="Logo" width={80} height={80} />
                            <p className={styles.text}>"Acordo Bom é Acordo Pago"</p>
                        </a>
                    </Link>       
                </div>
            </div>
        </div>
    )
}

export default RegisterMenu