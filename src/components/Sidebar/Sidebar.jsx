import { MAIN_MENU } from "../../data/menu";
import { MENU_DATA } from "../../data/menu";

import logoBlack from "../../assets/logoBlack.svg";
import logoImg from "../../assets/logoImg.svg";
import sidebarIcon from "../../assets/sidebarIcon.svg";
import logOut from "../../assets/logOut.svg";
import helpButton from "../../assets/helpButton.svg";
import submenuButton from "../../assets/submenuButton.svg";

import styles from './styles.module.css'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <a href="/">
                    <img src={logoImg} alt="" />
                    <img src={logoBlack} alt="" />
                </a>
                <button>
                    <img src={sidebarIcon} alt="" />
                </button>
            </div>

            <nav className={styles.sidebarMenu}>
                <ul className={styles.mainMenu}>
                    <li className={styles.mainMenuInner}>
                        <ul className={styles.mainMenuList}>
                            {MAIN_MENU.map((item, i) => (
                                <li key={i}>
                                    <a
                                        className={`${styles.mainMenuItem} ${item.active ? styles.mainMenuItemActive : ''
                                            }`}
                                        href="/"
                                    >
                                        <img className={styles.imgItem} src={item.icon} alt="" />
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {MENU_DATA.map((section, index) => (
                        <li key={index} className={styles.submenu}>
                            <div className={styles.submenuTitleInner}>
                                <span className={styles.submenuTitle}>
                                    <img className={styles.imgItem} src={section.icon} alt="" />
                                    {section.title}
                                </span>

                                <button>
                                    <img src={submenuButton} alt="" />
                                </button>
                            </div>

                            <ul className={styles.submenuItems}>
                                {section.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className={`${styles.submenuItem} ${item.active ? styles.submenuItemActive : ''
                                            }`}
                                    >
                                        <a
                                            className={styles.submenuItemLink}
                                            href="/"
                                        >
                                            <img className={styles.imgItem} src={item.icon} alt="" />
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles.submenuButtons}>
                <a
                    href="/"
                    className={styles.helpButton}
                >
                    <img src={helpButton} alt="" />
                    Поддержка
                </a>
                <button className={styles.logOutButton}>
                    <img src={logOut} alt="" />
                    Выход
                </button>
            </div>
        </aside>
    )
}

export default Sidebar