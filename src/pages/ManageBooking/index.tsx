import { Button, Card, DatePicker, Flex, Input } from "antd";
import BaseLayout from "../../components/BaseLayout";
import * as styles from './styles.css';
import { useNavigate } from "react-router-dom";

const ManageBookingPage = () => {
  const navigate = useNavigate();

  const onCancel = () => navigate(-1);

  return (
    <BaseLayout>
      <div className={styles.container}>
        <Card title='Create a booking' classNames={{ header: styles.titleContainer }}>
          <Flex vertical gap='middle'>
            <Input placeholder="Property name" />
            <DatePicker.RangePicker />
            <Flex gap='middle'>
              <Button type="default" className={styles.button} onClick={onCancel}>
                Cancel
              </Button>
              <Button type="primary" className={styles.button}>
                Submit
              </Button>
            </Flex>
          </Flex>
        </Card>
      </div>
    </BaseLayout>
  );
};

export default ManageBookingPage;
