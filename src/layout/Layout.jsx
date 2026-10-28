import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import styles from './styles.module.css'

function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Header />
            <Sidebar />
            <main className={styles.content}>
                <Breadcrumbs />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout