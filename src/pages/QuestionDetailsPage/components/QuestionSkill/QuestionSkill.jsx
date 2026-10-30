import styles from './styles.module.css'

function QuestionSkill({skill}) {
    return (
        <>
        <p className={styles.skill}>{skill}</p>
        </>
    )
}

export default QuestionSkill