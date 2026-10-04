import styles from './styles.module.css'

function InfoBadge({ label, value }) {
    return (
        <div className={styles.badge}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}

export default InfoBadge