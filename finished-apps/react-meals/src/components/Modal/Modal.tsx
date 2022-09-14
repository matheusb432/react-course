import { ReactNode } from 'react';
import { Button } from '../Button';
import styles from './style.module.scss';

interface ModalProps {
  children: ReactNode;
  show?: boolean;
  confirmText: string;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal = ({
  children,
  confirmText,
  onClose,
  onConfirm,
  show = true,
}: ModalProps) => {
  return (
    <>
      <div className={`${styles.backdrop} ${show && styles.show}`}></div>
      <div className={`${styles.modal} ${show && styles.show}`}>
        {children}
        <footer className={styles.footer}>
          <Button onClick={onClose} outlineStyle={true}>
            Close
          </Button>
          <Button onClick={onConfirm}>{confirmText}</Button>
        </footer>
      </div>
    </>
  );
};

export { Modal };
