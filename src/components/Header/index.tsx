import { Flex } from "antd";
import * as styles from './styles.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Flex className={styles.container}>
      <h1 className={styles.title}>
        <Link to='/' className={styles.link}>
          Hostfully
        </Link>
      </h1>
    </Flex>
  )
};

export default Header;
