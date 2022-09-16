import './Button.css';

interface ButtonProps {
  label: string;
  type?: 'submit' | 'button';
  onClick?: (...args: any[]) => void;
}

const Button = ({ type = 'submit', label, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
