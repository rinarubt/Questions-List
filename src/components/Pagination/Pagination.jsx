import { getPaginationRange } from "../../utils/getPaginationRange";

import arrowLeft from "../../assets/paginationArrowL.svg";
import arrowRight from "../../assets/paginationArrowR.svg";

import styles from './styles.module.css'

function Pagination({ currentPage, totalPages, onPageChange }) {
    const isFirst = currentPage === 1
    const isLast = currentPage === totalPages

    return (
        <div className={styles.pagination}>
            <button
                className={`${styles.paginationArrow} ${isFirst ? styles.disabled : ''}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={isFirst}
            >
                <img src={arrowLeft} alt="" />
            </button>

            {getPaginationRange(currentPage, totalPages).map((page) => {
                if (typeof page === 'string') {
                    return (
                        <span key={page} className={styles.ellipsis}>
                            ...
                        </span>
                    )
                }

                return (
                    <button
                        key={page}
                        className={`${styles.pageItem} ${currentPage === page ? styles.active : ''}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                )
            })}

            <button
                className={`${styles.paginationArrow} ${isLast ? styles.disabled : ''}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={isLast}
            >
                <img src={arrowRight} alt="" />
            </button>
        </div>
    )
}

export default Pagination