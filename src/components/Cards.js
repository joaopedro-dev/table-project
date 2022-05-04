import styles from '../../styles/components/Cards.module.css'
import Image from 'next/image'

function Cards(){
    return (
        <div className={styles.grid}>
            <div className={styles.phrase}>
                <Image src="/idea.png" alt="Logo" width={100} height={100} />
                <p className={styles.text}>
                “No meio da dificuldade, encontra-se a oportunidade”
                </p>
                <h3 className={styles.author_phrase}>Albert Einstein</h3>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <Image src="/call-center-1.png" alt="Logo" width={85} height={85} />
                    <p className={styles.text}>Registrar Ligação</p>
                </div>
                <div className={styles.card}>
                    <Image src="/mission.png" alt="Logo" width={85} height={85} />
                    <p className={styles.text}>Manifesto Table</p>
                </div>
            </div>
        </div>
    )
}

export default Cards