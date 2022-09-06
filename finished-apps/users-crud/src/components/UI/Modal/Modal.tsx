import styles from './Modal.module.css';

interface ModalProps {
  text: string;
}

const Modal = ({ text }: ModalProps) => {
  return <>{text}</>;
};

export default Modal;
