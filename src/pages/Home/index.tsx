import { Button, Flex } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useNavigate } from "react-router-dom";
import BookingTable from "../../booking/BookingTable";
import * as styles from './styles.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <Flex vertical align="flex-end">
        <Button type="primary" onClick={() => navigate('/manage-booking')}>
          Create a booking
        </Button>
      </Flex>
      <BookingTable className={styles.container} />
    </BaseLayout>
  );
};

export default HomePage;
