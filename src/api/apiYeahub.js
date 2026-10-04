import axios from "axios";

const BASE_URL = import.meta.env.VITE_YEA_API_URL

export const getQuestions = async (params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}/questions/public-questions`, {
            params
        })
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getSkills = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/skills`, {
            params: {limit : 44}
        })
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}