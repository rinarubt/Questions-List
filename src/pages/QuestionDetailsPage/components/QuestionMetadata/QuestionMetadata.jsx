import InfoBadge from "../../../../components/InfoBadge/InfoBadge";
import QuestionSkill from "../QuestionSkill/QuestionSkill";

import closeFiltersButton from "../../../../assets/closeFilters.svg";

import styles from './styles.module.css'

function QuestionMetadata({ question, onClose }) {
    const { keywords, rate, complexity, questionSkills } = question
    return (
        <div className={styles.questionMetadata}>
            <button className={styles.closeFilters} onClick={onClose}>
                <img src={closeFiltersButton} alt="" />
            </button>
            <h5 className={styles.subtitle}>Уровень:</h5>
            <div className={styles.infoBadges}>
                <InfoBadge label={'Сложность'} value={complexity} />
                <InfoBadge label={'Рейтинг'} value={rate} />
            </div>

            <h5 className={styles.subtitle}>Навыки:</h5>
            <div className={styles.skills}>
                {questionSkills?.map((s) => (
                    <QuestionSkill skill={s.title} key={s.id} />
                ))}

            </div>

            <h5 className={styles.subtitle}>Ключевые слова:
            </h5>
            <div className={styles.keywords}>
                {keywords?.map((k, index) => (
                    <p className={styles.keyword} key={index}>#{k}</p>
                ))}

            </div>

            <p className={styles.author}>Автор: <span className={styles.authorDec}>Дмитрий Мусиенко</span> </p>
        </div>
    )
}

export default QuestionMetadata