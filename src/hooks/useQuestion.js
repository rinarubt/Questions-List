import { useState, useEffect } from "react";
import { getQuestionById } from "../api/apiYeahub";

export function useQuestion(id) {
    const [question, setQuestion] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchQuestion() {
            setIsLoading(true)
            setError(null)
            setQuestion(null)

            try {
                const data = await getQuestionById(
                    id,
                    controller.signal
                )

                    setQuestion(data)
            } catch (error) {
                if (controller.signal.aborted) return
                
                setError(error)
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }
        fetchQuestion()

        return () => controller.abort()
    }, [id])
    return { question, isLoading, error }
}