import styles from './styles.module.css'

function FilterButton({ label, isActive, onClick }) {
    return (
        <button
            className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default FilterButton
