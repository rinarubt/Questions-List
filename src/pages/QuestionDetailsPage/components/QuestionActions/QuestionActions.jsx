import learn from "../../../../assets/learn.svg";
import repeat from "../../../../assets/repeat.svg";
import favourites from "../../../../assets/favourites.svg";
import prev from "../../../../assets/prev.svg";
import next from "../../../../assets/next.svg";
import styles from './styles.module.css'

function QuestionActions() {
    return (
        <div className={styles.questionActions}>
            <div className={styles.actions}>
                <button className={styles.button}>
                    <img src={learn} alt="" />
                    Учить
                </button>
                <button className={styles.button}>
                    <img src={repeat} alt="" />
                    Повторить
                </button>
                <button className={styles.button}>
                    <img src={favourites} alt="" />
                    Избранное
                </button>
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>
                    <img src={prev} alt="" />
                    Предыдущий</button>
                <button className={styles.button}>
                    Следующий
                    <img src={next} alt="" />
                </button>
            </div>
        </div>
    )

}

export default QuestionActions