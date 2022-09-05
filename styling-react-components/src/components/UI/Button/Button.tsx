import styles from './Button.module.css';

// import styled from 'styled-components';

interface ButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
  type: 'submit' | 'button';
  className?: string;
  onClick?: (...args: any[]) => void;
}

// ? Styled component
// const StyledButton = styled(Button)`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = ({ children, type, className, onClick }: ButtonProps) => {
  return (
    <button
      // ? applying CSS modules styles with styles.{class name}
      className={`${styles.button}${className ? ' ' + className : ''}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
