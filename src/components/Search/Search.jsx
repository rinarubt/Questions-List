import searchIcon from "../../assets/searchIcon.svg";
import styles from './styles.module.css'

function Search({ value, onChange }) {
    return (
        <div className={styles.searchWrapper}>
            <input
                className={styles.inputSearch}
                type="search"
                placeholder='Введите запрос…'
                value={value} onChange={(e) => onChange(e.target.value)}
            />
            <img className={styles.searchIcon} src={searchIcon} alt="" />
        </div>
    )

}

export default Search