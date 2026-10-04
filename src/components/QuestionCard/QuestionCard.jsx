import DOMPurify from "dompurify";

import InfoBadge from "../InfoBadge/InfoBadge";
import accordeon from "../../assets/accordeon.svg";
import action from "../../assets/action.svg";
import styles from './styles.module.css'


function QuestionCard({ question, isOpen, onToggle }) {
    const { title, shortAnswer, rate, complexity } = question

    return (
        <div className={styles.card}>
            <div
                className={styles.cardHeader}
                onClick={onToggle}
            >
                <span className={styles.dot}></span>
                <h4 className={styles.cardTitle}>{title}</h4>

                <img
                    className={`${styles.accordeon} ${isOpen ? styles.rotate : ''}`}
                    src={accordeon}
                    alt=""
                />
            </div>

            <div className={`${styles.cardContent} ${isOpen ? styles.show : ''}`}>
                <div className={styles.cardFilters}>
                    <div className={styles.cardFiltersInner}>
                        <InfoBadge label={'Рейтинг:'} value={rate} />
                        <InfoBadge label={'Сложность:'} value={complexity} />
                    </div>

                    <button
                        className={styles.actionsButton}
                    >
                        <img src={action} alt="" />
                    </button>
                </div>

                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(shortAnswer)
                    }}
                />
            </div>
        </div>
    )
}

export default QuestionCard
