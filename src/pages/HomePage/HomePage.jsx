import { useState, useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { useDebounce } from "../../hooks/useDebounce";
import { useQuestions } from "../../hooks/useQuestions";
import { useSkills } from "../../hooks/useSkills";

import { ITEMS_PER_PAGE } from "../../constants/constants";
import { EMPTY_FILTERS } from "../../constants/constants";

import { toggleRange } from "../../utils/toggleRange";
import { toggleValue } from "../../utils/toggleValue";

import QuestionCardList from "./components/QuestionCardList/QuestionCardList";
import Filters from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import EmptyState from "./components/EmptyState/EmptyState";
import LoadingState from "../../components/LoadingState/LoadingState";
import ErrorState from "../../components/ErrorState/ErrorState";

import styles from './styles.module.css'


function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams()

    const currentPage = Math.max(1, Number(searchParams.get('page')) || 1)

    const categoryParam = searchParams.get('category')
    const ratingParam = searchParams.get('rating')
    const complexityParam = searchParams.get('complexity')

    const [isFiltersOpen, setIsFiltersOpen] = useState(false)

    const urlSearch = searchParams.get('search') || ''

    const [debouncedSearch] = useDebounce(urlSearch, 400)

    const filters = useMemo(() => ({
        ...EMPTY_FILTERS,

        category: categoryParam
            ? categoryParam.split(',').map(Number)
            : [],

        rating: ratingParam
            ? ratingParam.split(',').map(Number)
            : [],

        complexity: (() => {
            try {
                return JSON.parse(complexityParam) || []
            } catch {
                return []
            }
        })()
    }), [categoryParam, ratingParam, complexityParam])

    const {
        questions,
        totalPages,
        isLoading,
        error: questionsError
    } = useQuestions({
        currentPage,
        itemsPerPage: ITEMS_PER_PAGE,
        filters,
        search: debouncedSearch,
    })

    const {
        skills,
        isLoading: skillsLoading,
        error: skillsError
    } = useSkills()

    const updateParams = (updates) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);

            Object.entries(updates).forEach(([key, value]) => {
                if (value === null || value === '') {
                    params.delete(key);
                } else {
                    params.set(key, String(value));
                }
            })
            return params
        })
    }

    const handleCloseFilters = useCallback(() => {
        setIsFiltersOpen(false);
    }, [])

    const handleSearchChange = (q) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev)

            if (q) {
                params.set('search', q)
            } else {
                params.delete('search')
            }

            params.set('page', '1')

            return params
        }, { replace: true })
    }

    const handlePageChange = (page) => {
        updateParams({ page })
    }

    const handleResetFilters = () => {
        setSearchQuery('')
        setDebouncedSearchImmediate('')

        updateParams({
            page: 1,
            search: null,
            category: null,
            rating: null,
            complexity: null
        })
    }

    const toggleCategory = (c) => {
        const updated = toggleValue(filters.category, c)

        updateParams({
            category: updated.join(','),
            page: 1
        })
    }

    const toggleRating = (r) => {
        const updated = toggleValue(filters.rating, r)

        updateParams({
            rating: updated.join(','),
            page: 1
        })
    }

    const toggleComplexity = (d) => {
        const updated = toggleRange(filters.complexity, d)
        updateParams({
            complexity: JSON.stringify(updated),
            page: 1
        })
    }

    const isEmpty = questions.length === 0

    return (
        <>
            <div className={styles.maincontent}>
                <section className={styles.inner}>
                    {isLoading ? (
                        <LoadingState />
                    ) : questionsError ? (
                        <ErrorState />
                    ) : isEmpty ? (
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
                                onPageChange={handlePageChange}
                            />
                        </>
                    )}
                </section>

                <Filters
                    searchQuery={urlSearch}
                    onSearchChange={handleSearchChange}
                    filters={filters}
                    toggleCategory={toggleCategory}
                    toggleRating={toggleRating}
                    toggleComplexity={toggleComplexity}
                    categories={skills}
                    isOpen={isFiltersOpen}
                    onClose={handleCloseFilters}
                    categoriesLoading={skillsLoading}
                    categoriesError={skillsError}
                />
            </div>
        </>
    )
}
export default HomePage