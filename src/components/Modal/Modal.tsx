import Styles from "@/components/Modal/Modal.module.css";
import { useEffect } from "react";



interface ModalState {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalState) => {
  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscPress);
    return () => document.removeEventListener("keydown", handleEscPress);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div onClick={onClose} className={Styles["modal--wrapper"]}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className={Styles["modal--box"]}
      >
        {children}
        {/* a closing icon */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className={Styles["modal--closeButton"]}
        >
          &times
        </button>
      </div>
    </div>
  );
};

export default Modal;
