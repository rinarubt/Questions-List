import { useState, useEffect, useRef } from 'react';

export function useDebounce(value, delay = 400) {
    const [debounced, setDebounced] = useState(value)
    const timeoutRef = useRef(null)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => setDebounced(value), delay)
        return () => clearTimeout(timeoutRef.current)
    }, [value, delay])

    const setDebouncedNow = (newValue) => {
        clearTimeout(timeoutRef.current)
        setDebounced(newValue)
    }

    return [debounced, setDebouncedNow]
}
