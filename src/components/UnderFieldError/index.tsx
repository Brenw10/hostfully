import { Typography } from "antd";
import * as styles from './styles.css';

type TUnderFieldError = {
  message: string;
};

const UnderFieldError = ({ message }: TUnderFieldError) => {
  return (
    <Typography.Text className={styles.text}>
      {message}
    </Typography.Text>
  );
};

export default UnderFieldError;
