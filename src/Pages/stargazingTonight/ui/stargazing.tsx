import styles from "../css/stargazing.module.css";
import { CustomForm } from "../../../Widgets/customForm/ui/customForm";
import { TableReviews } from "../../../Widgets/table/ui/table";
import { useState } from "react";
import { Text, Blockquote } from "@mantine/core";
import { IconAlien } from "@tabler/icons-react";

export const StargazingTonight = () => {
  const infoIcon = <IconAlien />;
  const [isTableVisible, setTableVisibility] = useState(false); //use when API request will be connected

  const tableVisibilityHandler = () => {
    setTableVisibility((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles["user-form"]}>
        <CustomForm tableVisibility={tableVisibilityHandler} />
        {isTableVisible ? (
          <TableReviews />
        ) : (
          <Blockquote
            color="#fbc375"
            mt="xl"
            radius="xl"
            iconSize={50}
            icon={infoIcon}
            cite="– Best regards, you aliens"
          >
            <Text size="lg" fw={300} c="#c5b7a7">
              Enter the latitude and longitude of your observing location using
              the form above. We use these coordinates to figure out when the
              sky will be at its darkest — when astronomical night has arrived
              and the Moon is safely below the horizon. That way, you can pick
              the best nights for stargazing, spotting planets, and looking for
              things that are definitely not aliens.
            </Text>
          </Blockquote>
        )}
      </div>
    </div>
  );
};
