import { useState, useEffect } from 'react';
import { getQuestions } from '../api/apiYeahub';
import { buildQueryParams } from '../utils/buildQueryParams';

export function useQuestions({
    currentPage,
    itemsPerPage,
    filters,
    search
}) {
    const [questions, setQuestions] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchQuestions() {
            setIsLoading(true)
            setError(null)

            try {
                const params = buildQueryParams({
                    currentPage,
                    itemsPerPage,
                    filters,
                    search,
                })

                const res = await getQuestions(
                    params,
                    controller.signal
                )

                setQuestions(res.data)
                setTotalPages(
                    Math.max(1, Math.ceil(res.total / itemsPerPage))
                )
            } catch (error) {
                if (controller.signal.aborted) return
                
                    setError(error)
                    setQuestions([])
                    setTotalPages(1)
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        fetchQuestions()

        return () => controller.abort()
    }, [currentPage, itemsPerPage, filters, search])

    return { questions, totalPages, isLoading, error }
}