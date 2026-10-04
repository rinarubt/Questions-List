export function toggleRange(ranges, range) {
    const exists = ranges.some(
        ([min, max]) => min === range[0] && max === range[1]
    )
    return exists
        ? ranges.filter(([min, max]) => !(min === range[0] && max === range[1]))
        : [...ranges, range]
}