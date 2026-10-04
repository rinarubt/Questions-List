import { useState, useEffect, useCallback } from "react";
import { toggleValue } from "../../utils/toggleValue";

import QuestionCard from "../QuestionCard/QuestionCard";
import filtersButton from "../../assets/filtersButton.svg";
import styles from './styles.module.css'

function QuestionCardList({ questions, onOpenFilters }) {
    const [openIds, setOpenIds] = useState([])

    const openSet = new Set(openIds)

    useEffect(() => {
        setOpenIds([])
    }, [questions])

    const toggleCard = useCallback((id) => {
        setOpenIds(prev => toggleValue(prev, id))
    }, [])

    return (
        <>
            <div className={styles.questionCardListHeader}>
                <h2 className={styles.title}>Вопросы</h2>
                <button className={styles.filtersButton} onClick={onOpenFilters}>
                    <img src={filtersButton} alt="" />

                </button>
            </div>


            {questions?.map(question => (
                    <QuestionCard
                        key={question.id}
                        question={question}
                        isOpen={openSet.has(question.id)}
                        onToggle={() => toggleCard(question.id)}
                    />
                ))}
        </>

    )
}

export default QuestionCardList
