import InfoBadge from "../../../../components/InfoBadge/InfoBadge";
import QuestionSkill from "../QuestionSkill/QuestionSkill";
import styles from './styles.module.css'

function QuestionMetadata() {
    return (
        <div className={styles.questionMetadata}>
                <h5 className={styles.subtitle}>Уровень:</h5>
                <div className={styles.infoBadges}>
                    <InfoBadge label={'Сложность'} />
                    <InfoBadge label={'Рейтинг'} />
                </div>

                <h5 className={styles.subtitle}>Навыки:</h5>
                <div className={styles.skills}>
                    <QuestionSkill />
                </div>

                <h5 className={styles.subtitle}>Ключевые слова:
                </h5>
                <div className={styles.keywords}>
                    <p className={styles.keyword}>#</p>
                </div>

                <p className={styles.author}>Автор: <span className={styles.authorDec}>Дмитрий Мусиенко</span> </p>
        </div>
    )
}

export default QuestionMetadata