import { useState, useCallback, useRef } from 'react'
import { useParams } from 'react-router-dom'

import { useQuestion } from '../../hooks/useQuestion'
import { useClickOutside } from '../../hooks/useClickOutside'

import QuestionContent from './components/QuestionContent/QuestionContent'
import QuestionActions from './components/QuestionActions/QuestionActions'
import AnswerSection from './components/AnswerSection/AnswerSection'
import QuestionProgress from './components/QuestionProgress/QuestionProgress'
import QuestionMetadata from './components/QuestionMetadata/QuestionMetadata'
import QuestionCopyright from './components/QuestionCopyright/QuestionCopyright'
import LoadingState from "../../components/LoadingState/LoadingState";
import ErrorState from "../../components/ErrorState/ErrorState";
import NotFoundState from './components/NotFoundState/NotFoundState'

import styles from './styles.module.css'

function QuestionDetailsPage() {
    const { id } = useParams()

    const { question, isLoading, error } = useQuestion(id)

    const [isDataOpen, setIsDataOpen] = useState(false)

    const handleCloseData = useCallback(() => {
        setIsDataOpen(false);
    }, [])

    const questionsDataRef = useRef(null)

    useClickOutside(questionsDataRef, handleCloseData, isDataOpen)

    return (
        <div className={styles.maincontent}>
            {isLoading ? (
                <LoadingState />
            ) : error ? (
                <ErrorState />
            ) : !question ? (
                <NotFoundState />
            ) : (
                <>
                    <section className={styles.section}>
                        <QuestionContent question={question} onOpenData={() => setIsDataOpen(true)} />
                        <QuestionActions />
                        <AnswerSection
                            title="Краткий ответ"
                            answer={question.shortAnswer}
                        />
                        <AnswerSection
                            title="Развёрнутый ответ"
                            answer={question.longAnswer}
                        />
                    </section>

                    <aside
                        className={`${styles.aside} ${isDataOpen ? styles.open : ''}`}
                        ref={questionsDataRef}
                    >
                        <QuestionProgress />
                        <QuestionMetadata
                            question={question}
                            onClose={handleCloseData}
                        />
                        <QuestionCopyright />
                    </aside>
                </>
            )}
        </div>
    )
}

export default QuestionDetailsPage