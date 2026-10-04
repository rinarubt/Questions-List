import { useEffect } from "react";

export function useClickOutside(ref, handler, isActive = true) {
    useEffect(() => {
        if (!isActive) return

        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }

            handler(event)
        }
        document.addEventListener('pointerdown', listener)

        return () => {
            document.addEventListener('pointerdown', listener)
        }
    }, [ref, handler, isActive])
}