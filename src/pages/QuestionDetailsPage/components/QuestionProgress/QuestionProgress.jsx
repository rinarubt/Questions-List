import styles from './styles.module.css'

function QuestionProgress() {
    return (
        <div className={styles.questionProgress}>
        <h4 className={styles.title}>Прогресс</h4>
                <p className={styles.progress}>Пройдено 3 из 3 вопрос изучен!</p>
                <div className={styles.progressInner}>
                <span className={styles.progressScaleR1}></span>
                <span className={styles.progressScaleS}></span>
                <span className={styles.progressScaleR2}></span>
                </div>
    </div>
    )
}

export default QuestionProgress