import styles from '../../styles/components/Cards.module.css'
import Image from 'next/image'

function Cards(){
    return (
        <div className={styles.grid}>
            <div className={styles.phrase}>
                <Image src="/ideia.png" alt="Logo" width={90} height={90} />
                <p className={styles.text}>
                “No meio da dificuldade, esncontra-se a oportunidade”
                </p>
                <h3 className={styles.author_phrase}>Albert Einstein</h3>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <Image src="/hard-work.png" alt="Logo" width={90} height={90} />
                    <p className={styles.text}>Tabular</p>
                </div>
                <div className={styles.card}>
                    <Image src="/magic-book.png" alt="Logo" width={90} height={90} />
                    <p className={styles.text}>Manifesto table</p>
                </div>
            </div>
        </div>
    )
}

export default Cards