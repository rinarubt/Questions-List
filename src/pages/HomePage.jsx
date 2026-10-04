import { useState } from "react";

import { useDebounce } from "../hooks/useDebounce";
import { useQuestions } from "../hooks/useQuestions";
import { useSkills } from "../hooks/useSkills";

import { ITEMS_PER_PAGE } from "../constants/constants";
import { EMPTY_FILTERS } from "../constants/constants";

import { toggleRange } from "../utils/toggleRange";
import { toggleValue } from "../utils/toggleValue";

import QuestionCardList from "../components/QuestionCardList/QuestionCardList";
import Filters from "../components/Filters/Filters";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import EmptyState from "../components/EmptyState/EmptyState";
import Pagination from "../components/Pagination/Pagination";

import styles from './styles.module.css'


function HomePage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters] = useState(EMPTY_FILTERS)
    const [currentPage, setCurrentPage] = useState(1)

    const [debouncedSearch, setDebouncedSearchImmediate] = useDebounce(searchQuery, 400)

    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    const skills = useSkills()

    const { questions, totalPages } = useQuestions({
        currentPage,
        itemsPerPage: ITEMS_PER_PAGE,
        filters,
        search: debouncedSearch,
    })

    const handleSearchChange = (q) => {
        setSearchQuery(q)
        setCurrentPage(1)
    }

    const toggleCategory = (c) => {
        setFilters((prev) => ({
            ...prev,
            category: toggleValue(prev.category, c),
        }))
        setCurrentPage(1)
    }

    const toggleRating = (r) => {
        setFilters((prev) => ({
            ...prev,
            rating: toggleValue(prev.rating, r),
        }))
        setCurrentPage(1)
    }

    const toggleComplexity = (d) => {
        setFilters((prev) => ({
            ...prev,
            complexity: toggleRange(prev.complexity, d),
        }))
        setCurrentPage(1)
    }

    const handleResetFilters = () => {
        setSearchQuery('')
        setDebouncedSearchImmediate('')
        setFilters({ ...EMPTY_FILTERS })
        setCurrentPage(1)
    }

    const isEmpty = questions.length === 0

    return (
        <>
            <Breadcrumbs />

            <div className={styles.maincontent}>
                <section className={styles.inner}>
                    {isEmpty ? (
                        <EmptyState onReset={handleResetFilters} />
                    ) : (
                        <>
                            <QuestionCardList
                                questions={questions}
                                onOpenFilters={() => setIsFiltersOpen(true)}
                            />

                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </>
                    )}
                </section>


                <Filters
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                    filters={filters}
                    toggleCategory={toggleCategory}
                    toggleRating={toggleRating}
                    toggleComplexity={toggleComplexity}
                    categories={skills}
                    isOpen={isFiltersOpen}
                    onClose={() => setIsFiltersOpen(false)}
                />
            </div>
        </>
    )
}

export default HomePage
