import {} from "@mantine/core";
import { NavLink } from "../../Shared/ui/navLink/index";
import { IconUniverse } from "@tabler/icons-react";
import { Stack } from "@mantine/core";

const mockData = [
  {
    icon: IconUniverse,
    label: "Universe photos",
  },
];

export const Navbar = () => {
  return (
    <Stack>
      {mockData.map((item, index) => {
        return (
          <div key={index}>
            <NavLink label={item.label} icon={item.icon}></NavLink>
          </div>
        );
      })}
    </Stack>
  );
};
