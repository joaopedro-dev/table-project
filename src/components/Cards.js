import styles from '../../styles/components/Cards.module.css'
import Image from 'next/image'

function Cards(){
    return (
        <div className={styles.grid}>
            <div className={styles.big_card}>
                <Image src="/idea.png" alt="Logo" width={95} height={95} />
                <p className={styles.text}>
                “No meio da dificuldade, encontra-se a oportunidade”
                </p>
                <h3 className={styles.author}>Albert Einstein</h3>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <Image src="/call-center.png" alt="Logo" width={80} height={80} />
                    <p className={styles.text}>Tabular de forma rápida</p>
                </div>
                <div className={styles.card_1}>
                    <Image src="/call-center-1.png" alt="Logo" width={80} height={80} />
                    <p className={styles.text}>Guia do Negociador</p>
                </div>
            </div>
        </div>
    )
}

export default Cards