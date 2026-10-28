
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

    useEffect(() => {
        const controller = new AbortController()
        let isCurrent = true

        const fetchQuestions = async () => {
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

                if (!isCurrent) return

                setQuestions(res.data)
                setTotalPages(
                    Math.max(1, Math.ceil(res.total / itemsPerPage))
                )
            } catch (error) {
                if (
                    controller.signal.aborted ||
                    error.code === 'ERR_CANCELED'
                ) {
                    return
                }

                if (isCurrent) {
                    console.error(error)
                    setQuestions([])
                    setTotalPages(1)
                }
            }
        }

        fetchQuestions()

        return () => {
            isCurrent = false
            controller.abort()
        }
    }, [currentPage, itemsPerPage, filters, search])

    return { questions, totalPages }
}