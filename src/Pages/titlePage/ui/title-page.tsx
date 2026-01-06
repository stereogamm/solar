import styles from "../styles/titlePage.module.css";
import { Background } from "../../../Shared/ui/background/background";


export function TitlePage() {
  return (
    <div className={styles.main}>
      <div className={styles["title-block"]}>
        <h1>Solaris</h1>
        <div className={styles.title}>
        </div>
      </div>
      <div className={styles["logo-block"]}>
        <Background />
      </div>
    </div>
  );
}
