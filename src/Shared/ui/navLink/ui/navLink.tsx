import { Tooltip, UnstyledButton } from "@mantine/core";
import { IconUniverse } from "@tabler/icons-react";
import styles from "../styles/navLink.module.css"

type NavLinkProps = {
  icon: typeof IconUniverse;
  onClick?: () => void;
  active?: boolean;
};

export const NavLink = ({
  icon: Icon,
  onClick,
  active,
}: NavLinkProps) => {
  return (
      <UnstyledButton
      className={styles.navlink}
        onClick={onClick}
        data-active={active || null}
      >
        <Icon size={30} stroke={1} color="#c8c4c4ff" />
      </UnstyledButton>
  );
};
