import { useState, useEffect } from 'react';
import { getSkills } from '../api/apiYeahub';

export function useSkills() {
    const [skills, setSkills] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchSkills() {
            try {
                const res = await getSkills(controller.signal)
                setSkills(res.data)
            } catch (error) {
                if (controller.signal.aborted) return

                setError(error)
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false)
                }
            }
        }

        fetchSkills()

        return () => controller.abort()
    }, [])

    return { skills, isLoading, error }
}