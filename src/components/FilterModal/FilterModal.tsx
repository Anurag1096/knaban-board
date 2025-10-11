import Modal from "../Modal/Modal";

interface FilterModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const FilterModal = ({ children, isOpen, onClose }: FilterModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default FilterModal;
