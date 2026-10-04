export function buildQueryParams({ currentPage, itemsPerPage, filters, search }) {
    const params = {
        page: currentPage,
        limit: itemsPerPage,
    }

    if (filters.category.length > 0) {
        params.skills = filters.category.join(',')
    }
    if (filters.rating.length > 0) {
        params.rate = filters.rating.join(',')
    }
    if (filters.complexity.length > 0) {
        params.complexity = filters.complexity
            .flatMap(([min, max]) =>
                Array.from({ length: max - min + 1 }, (_, i) => min + i)
            )
            .join(',')
    }
    if (search.trim()) {
        params.title = search.trim()
    }

    return params
}