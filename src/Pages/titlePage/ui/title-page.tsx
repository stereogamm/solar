import styles from "../styles/titlePage.module.css";
import { Background } from "../../../Shared/ui/background/background";
import { Navbar } from "../../../Widgets/navigation/navbar";



export function TitlePage() {
  return (
    <div className={styles.main}>
      <div className={styles["title-block"]}>
        <div className={styles.title}>
        <Navbar/>
          <h1>Solaris</h1>
          <span className={styles.subtitle}>
            What we want to know about Solar System
          </span>
        </div>
      </div>
      <div className={styles["logo-block"]}>
        <Background />
      </div>
    </div>
  );
}
