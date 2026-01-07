import { useState } from "react";
import { NavLink } from "../../../Shared/ui/navLink/index";
import { Stack } from "@mantine/core";
import styles from "../css/navbar.module.css";
import { navigationData } from "../../../Shared/configs/navigationData/navigationData";

export const Navbar = () => {
  const [active, setActive] = useState(2);

  return (
    <Stack className={styles.navbar} gap={50} justify="center">
      {navigationData.map((item, index) => {
        return (
          <div key={index}>
            <NavLink
              path={item.path}
              icon={item.icon}
              active={index === active}
              onClick={() => setActive(index)}
            ></NavLink>
          </div>
        );
      })}
    </Stack>
  );
};
