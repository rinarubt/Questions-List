import styles from './styles.module.css'

function ErrorState() {
    return (
        <div className={styles.state}>
            Произошла ошибка при загрузке данных.
        </div>
    )
}

export default ErrorState