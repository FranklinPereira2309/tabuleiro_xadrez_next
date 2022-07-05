import Subdivisao from "./Subdivisao";
import styles from '../styles/linha.module.css'

export default function Linha({ preta }) {
    return (
        <div className={styles.linha}>
            <Subdivisao preta={preta} />
            <Subdivisao preta={!preta} />
            <Subdivisao preta={preta} />
            <Subdivisao preta={!preta} />
            <Subdivisao preta={preta} />
            <Subdivisao preta={!preta} />
            <Subdivisao preta={preta} />
            <Subdivisao preta={!preta} />
        </div>
    )
}