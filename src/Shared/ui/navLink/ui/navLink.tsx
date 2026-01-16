import { UnstyledButton } from "@mantine/core";
import { IconUniverse , IconStars} from "@tabler/icons-react";
import styles from "../styles/navLink.module.css";
import { useNavigate } from "react-router-dom";
import { CountIndicator } from "../../../../Widgets/countIndicator/index"


type NavLinkProps = {
  icon: typeof IconUniverse;
  onClick?: () => void;
  active?: boolean;
  path: string;
};

export const NavLink = ({
  icon: Icon,
  onClick,
  active,
  path
}: NavLinkProps) => {
  
const navigation = useNavigate()

  return (
      <UnstyledButton
        className={styles.navlink}
        data-active={active || null}
        onClick={() => {navigation(path);
          if(onClick) {
            onClick();
          }

        }}
      > {
        Icon === IconStars? (
          <>
          <Icon size={30} stroke={1} color="#c8c4c4ff" />
            <CountIndicator/>
          </>
      ) : (
            <Icon size={30} stroke={1} color="#c8c4c4ff" />
      )
      }
    
      </UnstyledButton>
  );
};
