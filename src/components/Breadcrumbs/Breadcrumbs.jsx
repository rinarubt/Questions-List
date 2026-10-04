import BreadcrumbIcon from "../../assets/BreadcrumbIcon.svg";
import styles from './styles.module.css'

function Breadcrumbs() {
    return (
        <nav>
            <ol className={styles.breadcrumbs}>
                <li><a className={styles.button} href="/">База знаний</a></li>
                <img src={BreadcrumbIcon} alt="" />
                <li><a className={`${styles.button} ${styles.active}`} href="/">Список вопросов</a></li>
            </ol>
        </nav>
    )

}

export default Breadcrumbs


