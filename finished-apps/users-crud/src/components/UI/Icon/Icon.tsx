import styles from './Icon.module.css';

interface IconProps {
  icon: JSX.Element;
  onClick?: () => void;
}

const Icon = ({ icon, onClick }: IconProps) => {
  return (
    <button className={styles['icon-button']} onClick={onClick}>
      {icon}
    </button>
  );
};

export default Icon;
