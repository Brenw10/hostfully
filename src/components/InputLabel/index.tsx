import { Flex, Typography } from "antd";
import * as styles from './styles.css';

type TInputLabel = {
  children: React.ReactNode;
  error?: string;
  label: string;
};

const InputLabel = ({ children, label, error }: TInputLabel) => {
  return (
    <Flex vertical>
      <Typography.Text className={styles.label}>
        {label}
      </Typography.Text>
      {children}
      {error && (
        <Typography.Text className={styles.error}>
          {error}
        </Typography.Text>
      )}
    </Flex>
  );
};

export default InputLabel;
