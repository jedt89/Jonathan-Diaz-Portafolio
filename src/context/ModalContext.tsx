import { useDisclosure } from '@heroui/react';
import { createContext, ReactNode, useState } from 'react';

type ModalContextProps = {
  children: ReactNode;
};

const ModalContext = createContext({
  projectModalOpen: () => {},
  projectModalClose: () => {},
  projectModalIsOpen: false,
  projectModalOpenChange: () => {},
  showProjectModal: () => {},
  modalContent: {},
  setModalContent: (content: any) => {
    content;
  }
});

const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [modalContent, setModalContent] = useState({});
  const {
    onOpen: projectModalOpen,
    onClose: projectModalClose,
    isOpen: projectModalIsOpen,
    onOpenChange: projectModalOpenChange
  } = useDisclosure();

  const showProjectModal = () => {
    if (!projectModalIsOpen) {
      projectModalOpen();
    }
  };

  return (
    <ModalContext.Provider
      value={{
        projectModalOpen,
        projectModalClose,
        projectModalIsOpen,
        projectModalOpenChange,
        showProjectModal,
        modalContent,
        setModalContent
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
