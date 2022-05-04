import styles from '../styles/Card.module.css'
import Image from 'next/image'
import Navbar from '../src/components/Navbar'

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.grid}>
                <p>Grid</p>
                <div className={styles.row}>
                    <p>Row</p>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Table</h1>
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
                        <h1 className={styles.title}>Table</h1>
                        <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                        <p className={styles.text}>
                            Lorem
                        </p>
                        <h2 className={styles.author}>
                            Naruto
                        </h2>
                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Table</h1>
                        <Image src="/octopus.png" alt="Logo" width={35} height={35} />
                        <p className={styles.text}>
                            Lorem
                        </p>
                        <h2 className={styles.author}>
                            Naruto
                        </h2>
                    </div>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Table</h1>
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
