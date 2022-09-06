import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  onClick,
  className,
  type = 'submit',
}: ButtonProps) => {
  return (
    <button type={type} className={` ${className ?? ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
