import styles from '../../styles/components/CallCenter.module.css'

function PrevCenter() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Preventivo</h1>
            <div className={styles.tableBox}>
                <p className={styles.titleBox}>Reenvio de Boleto</p>
                <input type="text"/>
                <button>COPY</button>
                <button>RESTART</button>
            </div>
            <div className={styles.tableBox}>
                <p className={styles.titleBox}>Preventivo Positivo</p>
                <input type="text"/>
                <button>COPY</button>
                <button>RESTART</button>
            </div>
            <div className={styles.tableBox}>
                <p className={styles.titleBox}>Preventivo Negativo</p>
                <input type="text"/>
                <button>COPY</button>
                <button>RESTART</button>
            </div>
            <div className={styles.tableBox}>
                <p className={styles.titleBox}>Alega Pagamento</p>
                <input type="text"/>
                <button>COPY</button>
                <button>RESTART</button>
            </div>  
            <div className={styles.tableBox}>
                <p className={styles.titleBox}>Comprovante</p>
                <input type="text"/>
                <button>COPY</button>
                <button>RESTART</button>
            </div>    
        </div>
    )
}

export default PrevCenter