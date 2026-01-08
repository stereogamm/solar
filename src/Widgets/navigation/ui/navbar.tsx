import { useState } from "react";
import { NavLink } from "../../../Shared/ui/navLink/index";
import { Group} from "@mantine/core";
import { navigationData } from "../../../Shared/configs/navigationData/navigationData";

export const Navbar = () => {
  const [active, setActive] = useState(2);

  return (
    <Group gap={60}>
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
    </Group>
  );
};
