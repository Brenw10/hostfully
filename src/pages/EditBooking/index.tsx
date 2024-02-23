import BaseLayout from "../../components/BaseLayout";
import * as styles from './styles.css';
import BookingForm from "../../booking/BookingForm";
import { useNavigate } from "react-router-dom";

const EditBookingPage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <BookingForm
        className={styles.container}
        onCancel={() => navigate('/')}
        onSubmitted={() => navigate('/')}
      />
    </BaseLayout>
  );
};

export default EditBookingPage;
