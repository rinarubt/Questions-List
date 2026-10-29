import styles from './styles.module.css'

function EmptyState({ onReset }) {
    return (
        <div className={styles.empty}>
            <h2 className={styles.title}>Вопросы</h2>
            <p className={styles.emptyMessage}>К сожалению, ничего не найдено. Попробуйте изменить запрос или воспользуйтесь нашими категориями.</p>

            <button
                className={styles.emptyStateButton}
                onClick={onReset}>
                Сбросить фильтр
            </button>
        </div>
    )
}

export default EmptyState