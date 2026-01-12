import { Navbar } from "../../../Widgets/navigation/ui/navbar";
import { Outlet } from "react-router-dom";
import styles from "../css/layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles['main-content']}>
        <Outlet />
      </main>
    </div>
  );
};


