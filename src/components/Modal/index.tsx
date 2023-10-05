import { Container, ModalContent } from './styles';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Container onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </Container>
  );
};

export { Modal };
