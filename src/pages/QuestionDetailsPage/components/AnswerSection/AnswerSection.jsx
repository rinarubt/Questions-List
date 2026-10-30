import styles from './styles.module.css'

function AnswerSection({ title, answer }) {
    return (
        <div className={styles.answerSection}>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.answer}>{answer}</p>
        </div>

    )
}

export default AnswerSection