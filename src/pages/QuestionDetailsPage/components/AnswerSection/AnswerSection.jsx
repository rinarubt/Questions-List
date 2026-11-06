import { useState, useRef, useEffect } from "react";

import DOMPurify from "dompurify";

import styles from './styles.module.css';

function AnswerSection({ title, answer }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isOverflowing, setIsOverflowing] = useState(false)

    const answerRef = useRef(null)

    useEffect(() => {
        const element = answerRef.current

        if (element) {
            setIsOverflowing(element.scrollHeight > 500)
        }

        setIsExpanded(false)
    }, [answer])

    return (
        <div className={styles.answerSection}>
            <h4 className={styles.title}>{title}</h4>
            <div
                ref={answerRef}
                className={`${styles.answer} ${
                    !isExpanded ? styles.collapsed : ''
                }`}
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(answer || '')
                }}
            />

            {isOverflowing && (
                <button
                    className={styles.expandButton}
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    {isExpanded ? 'Свернуть' : 'Развернуть'}
                </button>
            )}
        </div>
    )
}

export default AnswerSection