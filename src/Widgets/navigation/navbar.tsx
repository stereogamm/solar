import { useState } from "react";
import { NavLink } from "../../Shared/ui/navLink/index";
import { IconUniverse, IconPlanet, IconTelescope, IconSatellite } from "@tabler/icons-react";
import { Stack } from "@mantine/core";
import styles from "./css/navbar.module.css"

const mockData = [
  {
    icon: IconPlanet,
    label: "Planet photos",
  },
  {
    icon: IconTelescope,
    label: "Telescope photos",
  },
    {
    icon: IconUniverse,
    label: "Universe photos",
  },
    {
    icon: IconSatellite,
    label: "Telescope photos",
  }
];

export const Navbar = () => {

    const [active, setActive] = useState(2)

  return (
    <Stack className={styles.navbar} gap={50} justify="center">
      {mockData.map((item, index) => {
        return (
          <div key={index}>
            <NavLink  icon={item.icon} active={index === active} onClick={() => setActive(index)}></NavLink>
          </div>
        );
      })}
    </Stack>
  );
};
