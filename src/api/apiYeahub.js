import axios from "axios";

const BASE_URL = import.meta.env.VITE_YEA_API_URL

export const getQuestions = async (params = {}, signal) => {
    const response = await axios.get(
        `${BASE_URL}/questions/public-questions`,
        {
            params,
            signal,
        }
    )

    return response.data
}

const fetchSkillsPage = (page, signal) =>
    axios.get(`${BASE_URL}/skills`, { params: { page }, signal })

export const getSkills = async (signal) => {
    const { data: firstPage } = await fetchSkillsPage(1, signal)
    const pageSize = firstPage.per_page ?? firstPage.data.length

    if (!pageSize) return firstPage

    const totalPages = Math.ceil(firstPage.total / pageSize)
    if (totalPages <= 1) return firstPage

    const rest = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) =>
            fetchSkillsPage(i + 2, signal)
        )
    )

    return {
        ...firstPage,
        data: firstPage.data.concat(...rest.map(r => r.data.data)),
    }
}

export const getQuestionById = async (id, signal) => {
    const response = await axios.get(
        `${BASE_URL}/questions/public-questions/${id}`,
        { signal }
    )

    return response.data
}