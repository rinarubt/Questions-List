import metadataButton from "../../../../assets/metadataButton.svg";
import styles from './styles.module.css'

function QuestionContent({ question, onOpenData }) {
    const { title, description } = question
    return (
        <div className={styles.questionContent}>
            <div className={styles.questionContentTitle}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.purpose}>{description}</p>
            </div>
            <button className={styles.metadataButton} onClick={onOpenData}>
                <img src={metadataButton} alt="" />
            </button>
        </div>
    )
}

export default QuestionContent