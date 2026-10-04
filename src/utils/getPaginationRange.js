const range = (start, end) => 
    Array.from({ length: end - start + 1 }, (_, i) => start + i)


const SIBLINGS = 2
const visibleCount = SIBLINGS * 2 + 3
const MAX_VISIBLE = 7

export function getPaginationRange(currentPage, totalPages) {
    if (totalPages <= 0) return []

    if (totalPages <= MAX_VISIBLE) {
        return range(1, totalPages)
    }

    const left = Math.max(2, currentPage - SIBLINGS)
    const right = Math.min(totalPages - 1, currentPage + SIBLINGS)

    const showLeftEllipsis = left > 3
    const showRightEllipsis = right < totalPages - 2

    if (!showLeftEllipsis && showRightEllipsis) {
        return [...range(1, visibleCount), 'ellipsis-end', totalPages]
    }

    if (showLeftEllipsis && !showRightEllipsis) {
        return [1, 'ellipsis-start', ...range(totalPages - SIBLINGS * 2 - 2, totalPages)]
    }

    return [
        1,
        'ellipsis-start',
        ...range(left, right),
        'ellipsis-end',
        totalPages,
    ]
}

