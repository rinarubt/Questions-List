import { useState, useEffect } from 'react';
import { getQuestions } from '../api/apiYeahub';
import { buildQueryParams } from '../utils/buildQueryParams';

export function useQuestions({ currentPage, itemsPerPage, filters, search }) {
    const [questions, setQuestions] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const params = buildQueryParams({
                    currentPage,
                    itemsPerPage,
                    filters,
                    search,
                })
                const res = await getQuestions(params)
                setQuestions(res.data)
                setTotalPages(Math.max(1, Math.ceil(res.total / itemsPerPage)))
            } catch (error) {
                console.log(error)
                setQuestions([])
            }
        }
        fetchQuestions()

    }, [currentPage, itemsPerPage, filters, search])

    return { questions, totalPages }
}