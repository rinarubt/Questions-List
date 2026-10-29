import styles from './styles.module.css'

function Breadcrumbs() {
    return (
        <nav>
            <ol className={styles.breadcrumbs}>
                <li><a className={styles.button} href="/" onClick={(e) => e.preventDefault()} >База знаний</a></li>
                <span className={styles.iconMask}></span>
                <li><a className={styles.button}  href="/" onClick={(e) => e.preventDefault()} >Список вопросов</a></li>
                <span className={`${styles.iconMask} ${styles.iconMaskActive}`}></span>
                <li><a className={`${styles.button} ${styles.active}`} href="/" onClick={(e) => e.preventDefault()} >Подробнее</a></li>
            </ol>
        </nav>
    )

}

export default Breadcrumbs


