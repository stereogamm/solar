import { Modal } from "@mantine/core";
import type { ReactNode } from "react";

type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const ModalWindow = ({ onClose, isOpened, children }: ModalProps) => {
  return (
    <>
      <Modal
        styles={{
    content: {
      boxShadow: '0px 21px 50px 0px rgba(249, 153, 10, 0.2)',
    },
  }}
        opened={isOpened}
        onClose={onClose}
        title=""
        overlayProps={{
          backgroundOpacity: 0.75,
          blur: 4,
        }}
        transitionProps={{
          transition: "fade-down",
          duration: 1000,
        }}
        centered
        size="lg"
        shadow="lg"
        radius="lg"
      >
        {children}
      </Modal>
    </>
  );
};
