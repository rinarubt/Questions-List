import settings from "../../assets/settings.svg";
import profilePhoto from "../../assets/profilePhoto.svg";
import logoImg from "../../assets/logoImg.svg";
import styles from './styles.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <a className={styles.logoImg} href="/"><img src={logoImg} alt="" /></a>
            <div className={styles.headerActions}>
                <a className={styles.headerAction} href="/" >
                    <img src={settings} alt="" />
                </a>
                <a className={styles.headerAction} href="/" >
                    <img src={profilePhoto} alt="" />
                </a>
            </div>
            <button className={styles.burger}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </header>
    )
}

export default Header