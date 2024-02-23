import * as styles from './styles.css';

type TBoxShadow = {
  children: React.ReactNode,
  className?: string;
};

const BoxShadow = ({ children, className = '' }: TBoxShadow) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  )
};

export default BoxShadow;
