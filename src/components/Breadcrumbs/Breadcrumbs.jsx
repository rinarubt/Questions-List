import { Link, useLocation, matchPath } from 'react-router-dom';
import styles from './styles.module.css'

function Breadcrumbs() {
    const { pathname } = useLocation()

    const isDetailsPage = Boolean(
        matchPath('/Questions-List/details/:id', pathname)
    )

    return (
        <nav>
            <ol className={styles.breadcrumbs}>
                <li className={styles.breadcrumbItem}>
                    <span className={styles.button}>База знаний</span>
                    <span
                        className={`${styles.iconMask} ${!isDetailsPage ? styles.iconMaskActive : ''
                            }`}
                    />
                </li>

                <li className={styles.breadcrumbItem}>
                    <Link
                        to="/Questions-List/"
                        className={`${styles.button} ${!isDetailsPage ? styles.active : ''
                            }`}
                    >
                        Список вопросов
                    </Link>

                    {isDetailsPage && (
                        <span
                            className={`${styles.iconMask} ${styles.iconMaskActive}`}
                        />
                    )}
                </li>

                {isDetailsPage && (
                    <li className={styles.breadcrumbItem}>
                        <span
                            className={`${styles.button} ${styles.active}`}
                        >
                            Подробнее
                        </span>
                    </li>
                )}
            </ol>
        </nav>
    )
}

export default Breadcrumbs;