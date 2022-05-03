import styles from '../styles/Card.module.css'
import Image from 'next/image'

export default function Home() {
  return (
        <div className={styles.container}>
        <div className={styles.grid}>
        <div className={styles.row}>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        TITLE CARD
                    </h1>
                    <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                    <p className={styles.text}>
                        Lorem
                    </p>
                    <h2 className={styles.author}>
                        Naruto
                    </h2>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        TITLE CARD
                    </h1>
                    <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                    <p className={styles.text}>
                        Lorem
                    </p>
                    <h2 className={styles.author}>
                        Naruto
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        TITLE CARD
                    </h1>
                    <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                    <p className={styles.text}>
                        Lorem
                    </p>
                    <h2 className={styles.author}>
                        Naruto
                    </h2>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        TITLE CARD
                    </h1>
                    <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                    <p className={styles.text}>
                        Lorem
                    </p>
                    <h2 className={styles.author}>
                        Naruto
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        TITLE CARD
                    </h1>
                    <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                    <p className={styles.text}>
                        Lorem
                    </p>
                    <h2 className={styles.author}>
                        Naruto
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        TITLE CARD
                    </h1>
                    <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                    <p className={styles.text}>
                        Lorem
                    </p>
                    <h2 className={styles.author}>
                        Naruto
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}
