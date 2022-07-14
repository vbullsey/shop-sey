import Button from "@/ui/Actions/Button";
import Modal from "@/ui/Actions/Modal";
import { ReactNode, useState } from "react";

type RenderModalProps = {
  children: ReactNode;
};

export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const closeModal = () => setVisible(false);

  const RenderModal: React.FC<RenderModalProps> = ({ children }) => (
    <>
      <Modal open={visible} onClickBackdrop={toggleVisible}>
        <Button
          size="sm"
          shape="circle"
          className="absolute right-2 top-2"
          onClick={toggleVisible}
        >
          ✕
        </Button>
        {children}
      </Modal>
    </>
  );

  return {
    RenderModal,
    toggleVisible,
    closeModal,
  };
};
