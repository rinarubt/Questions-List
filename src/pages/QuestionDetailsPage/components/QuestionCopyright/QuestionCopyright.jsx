import avatar from "../../../../assets/avatar.svg";
import tg from "../../../../assets/tg.svg";
import yt from "../../../../assets/yt.svg";
import prof from "../../../../assets/prf.svg";

import styles from './styles.module.css'

function QuestionCopyright() {
    return (
        <div className={styles.questionCopyright}>
            <div className={styles.header}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div>
                    <p className={styles.author}>Руслан Куянец</p>
                    <p className={styles.position}>Python Guru</p>
                </div>

            </div>

            <p className={styles.description}>Guru – это эксперты платформы, которые помогают развивать комьюнити.</p>

            <div className={styles.socialmedia}>
                <a href=""><img src={tg} alt="" /></a>
                <a href=""><img src={yt} alt="" /></a>
                <a href=""><img src={prof} alt="" /></a>
            </div>
        </div>
    )
}

export default QuestionCopyright