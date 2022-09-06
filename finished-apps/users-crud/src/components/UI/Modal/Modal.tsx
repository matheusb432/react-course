import Button from '../Button/Button';
import styles from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  show: boolean;
  title: string;
  buttonLabel?: string;
}

const Modal = ({
  children,
  closeModal,
  title,
  buttonLabel = 'OK',
  show = false,
}: ModalProps) => {
  return show ? (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <header className={styles['modal-header']}>
          <span>{title}</span>
        </header>
        <article className={styles['modal-body']}>{children}</article>
        <footer className={styles['modal-footer']}>
          <Button type="button" onClick={closeModal}>
            {buttonLabel}
          </Button>
        </footer>
      </div>
    </div>
  ) : null;
};

export default Modal;
