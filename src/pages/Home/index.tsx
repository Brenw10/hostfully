import { Button, Flex } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onClickCreateBooking = () => {
    navigate('/manage-booking');
  };

  return (
    <BaseLayout>
      <Flex vertical align="flex-end">
        <Button type="primary" onClick={onClickCreateBooking}>
          Create a booking
        </Button>
      </Flex>
    </BaseLayout>
  );
};

export default HomePage;
