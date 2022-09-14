import { ReactNode } from 'react';
import styles from './style.module.scss';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export { Modal };
