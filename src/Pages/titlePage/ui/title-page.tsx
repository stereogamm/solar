import styles from "../styles/titlePage.module.css";
import { Background } from "../../../Shared/ui/background/background";
import { Text } from "@mantine/core";

export const TitlePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles["title-block"]}>
        <Text
          variant="gradient"
          gradient={{ from: "#ffffff", to: "#0000", deg: 55 }}
          mb="lg"
          fz="h1"
          fw={100}
          className={styles.title}
          size="xl"
        >
          SØLAR
        </Text>
      </div>
      <div className={styles["logo-block"]}>
        <Background />
      </div>
    </div>
  );
}
