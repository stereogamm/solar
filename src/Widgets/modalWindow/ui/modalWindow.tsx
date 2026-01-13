
import { Modal } from '@mantine/core';




type ModalProps = {
  isOpened: boolean;
  onClose: () => void;
  children: any; //will be fixed
}

export const  ModalWindow = ({onClose, isOpened, children} : ModalProps) => {

  if(!isOpened) {
    return null
  }

  return (
    <>
      <Modal
        opened={isOpened}
        onClose={onClose}
        title="details"
        overlayProps={{
          backgroundOpacity: 0.75,
          blur: 4,
        }}
      >
        {children}
      </Modal>
    </>
 
  );
}