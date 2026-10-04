import logoWhite from "../../assets/logoWhite.svg";
import Figma from "../../assets/Figma.svg";
import Telegram from "../../assets/Telegram.svg";
import Youtube from "../../assets/Youtube.svg";
import Tiktok from "../../assets/Tiktok.svg";
import Github from "../../assets/Github.svg";
import styles from './styles.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogo}>
                <img src={logoWhite} alt="" />
                <p>Выбери, каким будет IT завтра, вместе с нами</p>
                <p className={styles.footerAbout}>YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для ознакомления в Figma.</p>
            </div>
            <div className={styles.copyright}>
                <p className={styles.copyrightText}>© 2024 YeaHub Документы</p>
                <div className={styles.socialmedia}>
                    <p className={styles.copyrightText}>Ищите нас и в других соцсетях @yeahub_it</p>
                    <a href="/"><img src={Figma} alt="Figma" /></a>
                    <a href="/"><img src={Telegram} alt="Telegram" /></a>
                    <a href="/"><img src={Youtube} alt="Youtube" /></a>
                    <a href="/"><img src={Tiktok} alt="Tiktok" /></a>
                    <a href="/"><img src={Github} alt="Github" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer