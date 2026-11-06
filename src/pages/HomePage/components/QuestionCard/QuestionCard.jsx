import { useRef, useState } from "react";
import { useClickOutside } from '../../../../hooks/useClickOutside';

import DOMPurify from "dompurify";

import InfoBadge from "../../../../components/InfoBadge/InfoBadge";
import QuestionActionsMenu from "../QuestionActionsMenu/QuestionActionsMenu";

import accordeon from "../../../../assets/accordeon.svg";
import action from "../../../../assets/action.svg";
import styles from './styles.module.css'


function QuestionCard({ question, isOpen, onToggle }) {
    const { id, title, shortAnswer, rate, complexity } = question
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const actionsRef = useRef(null)

    useClickOutside(
        actionsRef,
        () => setIsMenuOpen(false),
        isMenuOpen
    )

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
                <div>
                    <div className={styles.cardFilters}>
                        <div className={styles.cardFiltersInner}>
                            <InfoBadge label={'Рейтинг:'} value={rate} />
                            <InfoBadge label={'Сложность:'} value={complexity} />
                        </div>

                        <div className={styles.actionsWrapper} ref={actionsRef}>
                            <button className={styles.actionsButton} onClick={() => setIsMenuOpen(prev => !prev)}>
                                <img src={action} alt="" />
                            </button>
                            {isMenuOpen && <QuestionActionsMenu questionId={id} />}
                        </div>
                    </div>


                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(shortAnswer)
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default QuestionCard