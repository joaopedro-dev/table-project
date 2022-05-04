import styles from '../../styles/components/Cards.module.css'
import Image from 'next/image'

function Cards(){
    return (
        <div className={styles.grid}>
            <div className={styles.phrase}>
                <Image src="/product.png" alt="Logo" width={100} height={100} />
                <p className={styles.text}>
                “No meio da dificuldade, encontra-se a oportunidade”
                </p>
                <h3 className={styles.author_phrase}>Albert Einstein</h3>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <Image src="/customer-service.png" alt="Logo" width={85} height={85} />
                    <p className={styles.text}>Tabular</p>
                </div>
                <div className={styles.card}>
                    <Image src="/mission.png" alt="Logo" width={85} height={85} />
                    <p className={styles.text}>Manifesto table</p>
                </div>
            </div>
        </div>
    )
}

export default Cards