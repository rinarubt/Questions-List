import QuestionContent from './components/QuestionContent/QuestionContent'
import QuestionActions from './components/QuestionActions/QuestionActions'
import AnswerSection from './components/AnswerSection/AnswerSection'
import QuestionProgress from './components/QuestionProgress/QuestionProgress'
import QuestionMetadata from './components/QuestionMetadata/QuestionMetadata'
import QuestionCopyright from './components/QuestionCopyright/QuestionCopyright'

import styles from './styles.module.css'

function QuestionDetailsPage() {
    
    return (
        <div className={styles.maincontent}>
        <section className={styles.section}>
            <QuestionContent/>
            <QuestionActions/>
            <AnswerSection title={'Краткий ответ'} />
            <AnswerSection title={'Развёрнутый ответ'} />
        </section>

        <aside className={styles.aside}>
            <QuestionProgress/>
            <QuestionMetadata/>
            <QuestionCopyright/>
        </aside>
        </div>
    )
}

export default QuestionDetailsPage