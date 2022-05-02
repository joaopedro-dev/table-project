import styles from '../../styles/components/Cards.module.css'
import Image from 'next/image'

function Cards(){
    return (
        <div className={styles.grid}>
            <div className={styles.phrase}>
                <h2 className={styles.title}>Table</h2>
                <Image src="/octopus.png" alt="Logo" width={95} height={95} />
                <p className={styles.text}>
                “No meio da dificuldade, encontra-se a oportunidade”
                </p>
                <h3 className={styles.author_phrase}>Albert Einstein</h3>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Registrar Ligação</h1>
                    <Image src="/hard-work.png" alt="Logo" width={95} height={95} />
                    <p className={styles.text}>Tabular de forma rápida</p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Busque Evoluir</h1>
                    <Image src="/magic-book.png" alt="Logo" width={95} height={95} />
                    <p className={styles.text}>Manifesto table</p>
                </div>
            </div>
        </div>
    )
}

export default Cards