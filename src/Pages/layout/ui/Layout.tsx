import { Navbar } from "../../../Widgets/navigation/navbar";
import { Outlet } from "react-router-dom";
import styles from "../css/layout.module.css"

export const Layout = () => {
    return(
        <div className={styles.wrapper}>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
} 