// import styles from './Wrapper.module.css';

interface WrapperProps {
  children: React.ReactNode;
}

// NOTE Equivalent to a React fragment
const Wrapper = ({ children }: WrapperProps) => {
  return children;
};

export default Wrapper;
