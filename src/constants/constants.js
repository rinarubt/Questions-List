export const ITEMS_PER_PAGE = 9

export const VISIBLE_LIMIT = 6

export const EMPTY_FILTERS = {
    category: [],
    complexity: [],
    rating: [],
}

export const COMPLEXITY_OPTIONS = [
    { label: '1-3', value: [1, 3] },
    { label: '4-6', value: [4, 6] },
    { label: '7-8', value: [7, 8] },
    { label: '9-10', value: [9, 10] },
]

export const RATING_OPTIONS = [1, 2, 3, 4, 5]

export const STATUS_OPTIONS = [
    { label: 'Изученные' },
    { label: 'Не изученные' },
    { label: 'Все', isActive: true },
    { label: 'Только избранные' },
]