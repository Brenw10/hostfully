import BaseLayout from "../../components/BaseLayout";
import * as styles from './styles.css';
import BookingForm from "../../booking/BookingForm";
import { useNavigate, useParams } from "react-router-dom";
import { useBookings } from "../../booking/BookingsProvider/context";

const EditBookingPage = () => {
  const navigate = useNavigate();
  const { bookings } = useBookings();
  const { id } = useParams();
  const booking = bookings.find(booking => booking.id === id);

  return (
    <BaseLayout>
      <BookingForm
        booking={booking}
        className={styles.container}
        onCancel={() => navigate('/')}
        onSubmitted={() => navigate('/')}
      />
    </BaseLayout>
  );
};

export default EditBookingPage;
