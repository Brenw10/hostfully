import { Flex, Typography } from 'antd';
import BaseLayout from '../../components/BaseLayout';

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <Flex vertical align='center'>
        <Typography.Text>
          Sorry, this page does not exist.
        </Typography.Text>
      </Flex>
    </BaseLayout>
  )
};

export default NotFoundPage;
