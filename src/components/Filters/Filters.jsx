import { useState, useRef } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";

import { VISIBLE_LIMIT } from "../../constants/constants";
import { COMPLEXITY_OPTIONS } from "../../constants/constants";
import { RATING_OPTIONS } from "../../constants/constants";
import { STATUS_OPTIONS } from "../../constants/constants";

import Search from "../Search/Search";
import FilterButton from "../FilterButton/FilterButton";

import closeFiltersButton from "../../assets/closeFilters.svg";

import styles from './styles.module.css'

function Filters({
    searchQuery,
    onSearchChange,
    filters,
    categories,
    toggleCategory,
    toggleRating,
    toggleComplexity,
    isOpen,
    onClose
}) {
    const [showAllCategories, setShowAllCategories] = useState(false)

    const filtersRef = useRef()

    const safeCategories = categories || []

    const visibleCategories = showAllCategories ? safeCategories : safeCategories.slice(0, VISIBLE_LIMIT)

    const isComplexityActive = (value) =>
        filters.complexity.some(
            ([min, max]) => min === value[0] && max === value[1]
        )

    useClickOutside(filtersRef, onClose, isOpen)

    return (
        <aside className={`${styles.filters} ${isOpen ? styles.open : ''}`} ref={filtersRef}>
            <button className={styles.closeFilters} onClick={onClose}>
                <img src={closeFiltersButton} alt="" />
            </button>
            <Search value={searchQuery} onChange={onSearchChange} />

            <div className={styles.filterButtons}>
                <h4 className={styles.filterButtonsTitle}>Категории вопросов</h4>

                <div className={styles.categoriesButtons}>
                    {visibleCategories.map((cat) => (
                        <FilterButton
                            key={cat.id}
                            label={cat.title}
                            isActive={filters.category.includes(cat.id)}
                            onClick={() => toggleCategory(cat.id)}
                        />
                    ))}
                </div>

                {safeCategories.length > VISIBLE_LIMIT && (
                    <button
                        className={styles.moreBtn}
                        onClick={() => setShowAllCategories((prev) => !prev)}
                    >
                        {showAllCategories ? 'Скрыть' : 'Посмотреть все'}
                    </button>
                )}

                <div className={styles.filterGroup}>
                    <h4 className={styles.filterButtonsTitle}>Уровень сложности</h4>
                    {COMPLEXITY_OPTIONS.map((opt) => (
                        <FilterButton
                            key={opt.label}
                            label={opt.label}
                            isActive={isComplexityActive(opt.value)}
                            onClick={() => toggleComplexity(opt.value)}
                        />
                    ))}

                    <h4 className={styles.filterButtonsTitle}>Рейтинг</h4>
                    {RATING_OPTIONS.map((r) => (
                        <FilterButton
                            key={r}
                            label={r}
                            isActive={filters.rating.includes(r)}
                            onClick={() => toggleRating(r)}
                        />
                    ))}

                    <h4 className={styles.filterButtonsTitle}>Статус</h4>
                    {STATUS_OPTIONS.map((status) => (
                        <FilterButton
                            key={status.label}
                            label={status.label}
                            isActive={status.isActive}
                        />
                    ))}
                </div>
            </div>
        </aside>
    )
}

export default Filters
