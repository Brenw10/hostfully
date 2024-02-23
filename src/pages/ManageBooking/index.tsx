import BaseLayout from "../../components/BaseLayout";
import * as styles from './styles.css';
import BookingForm from "../../booking/BookingForm";
import { useNavigate } from "react-router-dom";

const ManageBookingPage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <BookingForm
        className={styles.container}
        onCancel={() => navigate(-1)}
        onSubmitted={() => navigate(-1)}
      />
    </BaseLayout>
  );
};

export default ManageBookingPage;
