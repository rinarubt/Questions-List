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


export const getSkills = async () => {
    try {
        const firstResponse = await axios.get(`${BASE_URL}/skills`, {
            params: { page: 1 }
        })

        const firstData = firstResponse.data
        const allSkills = [...firstData.data]

        const totalPages = Math.ceil(
            firstData.total / firstData.data.length
        )

        for (let page = 2; page <= totalPages; page++) {
            const response = await axios.get(`${BASE_URL}/skills`, {
                params: { page }
            })

            allSkills.push(...response.data.data)
        }

        return {
            ...firstData,
            data: allSkills
        }
    } catch (error) {
        console.error('Ошибка загрузки категорий:', error)
        throw error
    }
}