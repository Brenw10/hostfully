import { Button, Flex } from "antd";
import BaseLayout from "../../components/BaseLayout";
import { useNavigate } from "react-router-dom";
import { useBookings } from "../../booking/BookingsProvider/context";

const HomePage = () => {
  const navigate = useNavigate();
  const { bookings } = useBookings();

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
      {JSON.stringify(bookings, undefined, 2)}
    </BaseLayout>
  );
};

export default HomePage;
