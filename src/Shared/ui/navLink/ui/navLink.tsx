import { Tooltip, UnstyledButton } from "@mantine/core";
import { IconUniverse } from "@tabler/icons-react";

type NavLinkProps = {
  icon: typeof IconUniverse;
  onClick?: () => void;
  label: string;
  active?: boolean;
};

export const NavLink = ({
  icon: Icon,
  onClick,
  label,
  active,
}: NavLinkProps) => {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 3 }}>
      <UnstyledButton
        onClick={onClick}
        data-active={active || null}
        style={{
          background: "none",
        }}
      >
        <Icon size={40} stroke={1.0} color="#ffffff" />
      </UnstyledButton>
    </Tooltip>
  );
};
