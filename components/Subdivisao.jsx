import styles from '../styles/subdivisao.module.css'

export default function Subdivisao({ preta }) {
    return (
        <div
            className={styles.subdivisao}
            style={{ backgroundColor: preta ? '#000' : '#fff' }}
        >

        </div>
    )
}