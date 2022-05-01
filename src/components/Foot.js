import styles from '../../styles/components/Foot.module.css'

function Foot() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '} 
            </a>
        </footer>
    )
}

export default Foot