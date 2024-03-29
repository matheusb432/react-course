import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';
import styles from './style.module.scss';

interface ModalProps {
  children: ReactNode;
  show?: boolean;
  confirmText: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoadingConfirm?: boolean;
}

const Modal = ({
  children,
  confirmText,
  onClose,
  onConfirm,
  show = true,
  isLoadingConfirm = false,
}: ModalProps) => {
  return (
    <>
      {createPortal(
        <div
          className={`${styles.backdrop} ${show && styles.show}`}
          onClick={onClose}></div>,
        document.getElementById('backdrop-root')!
      )}
      {createPortal(
        <div className={`${styles.modal} ${show && styles.show}`}>
          {children}
          <footer className={styles.footer}>
            <Button onClick={onClose} outlineStyle={true}>
              Close
            </Button>
            <Button
              onClick={onConfirm}
              isLoading={isLoadingConfirm}
              loadingText="Submitting order...">
              {confirmText}
            </Button>
          </footer>
        </div>,
        document.getElementById('overlay-root')!
      )}
    </>
  );
};

export { Modal };
