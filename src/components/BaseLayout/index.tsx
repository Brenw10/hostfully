import Header from "../Header";
import * as styles from './styles.css';

type TBaseLayout = {
  children: React.ReactNode,
  className?: string;
};

const BaseLayout = ({ className = '', children }: TBaseLayout) => {
  return (
    <>
      <Header />
      <div className={`${styles.content} ${className}`}>
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
