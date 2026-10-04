import { useState, useEffect } from 'react';
import { getSkills } from '../api/apiYeahub';

export function useSkills() {
    const [skills, setSkills] = useState([])

    useEffect(() => {

        const fetchSkills = async () => {
            try {
                const res = await getSkills()
                setSkills(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSkills()
    }, [])

    return skills
}