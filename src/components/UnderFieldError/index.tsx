import { Flex, Typography } from "antd";
import * as styles from './styles.css';

type TUnderFieldError = {
  children: React.ReactNode;
  message?: string;
};

const UnderFieldError = ({ children, message }: TUnderFieldError) => {
  return (
    <Flex vertical>
      {children}
      {message && (
        <Typography.Text className={styles.text}>
          {message}
        </Typography.Text>
      )}
    </Flex>
  );
};

export default UnderFieldError;
