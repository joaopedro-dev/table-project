import styles from '../../styles/components/Cards.module.css'
import Image from 'next/image'

function Cards(){
    return (
        <div className={styles.grid}>
            <div className={styles.phrase}>
                <h2 className={styles.title_phrase}>Table</h2>
                <Image src="/octopus.png" alt="Logo" width={95} height={95} />
                <p className={styles.text_phrase}>
                “No meio da dificuldade, encontra-se a oportunidade”
                </p>
                <h3 className={styles.author_phrase}>Albert Einstein</h3>
            </div>
        </div>
    )
}

export default Cards