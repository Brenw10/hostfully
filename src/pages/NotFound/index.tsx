import { Flex, Typography } from 'antd';
import Header from '../../components/Header';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <Flex vertical align='center'>
        <Typography.Text>
          Sorry, this page does not exist.
        </Typography.Text>
      </Flex>
    </>
  )
};

export default NotFoundPage;
