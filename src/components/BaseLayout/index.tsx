import Header from "../Header";
import * as styles from './styles.css';

type TBaseLayout = {
  children: React.ReactNode,
};

const BaseLayout = ({ children }: TBaseLayout) => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
};

export default BaseLayout;
