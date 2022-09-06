import React from 'react';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.scss';
import { createPortal } from 'react-dom';

interface BackdropProps {
  onConfirm: () => void;
}

interface ModalOverlayProps {
  title: string;
  message: string;
  onConfirm: () => void;
}

interface ErrorModalProps {
  title: string;
  message: string;
  onConfirm: () => void;
}

const Backdrop = ({ onConfirm }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }: ModalOverlayProps) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }: ErrorModalProps) => {
  return (
    <>
      {/* NOTE creating a portal to the DOM container where this will be rendered */}
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')!
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root')!
      )}
    </>
  );
};

export default ErrorModal;
