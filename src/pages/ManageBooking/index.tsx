import BaseLayout from "../../components/BaseLayout";
import * as styles from './styles.css';
import BoxShadow from "../../components/BoxShadow";
import BookingForm from "../../booking/BookingForm";
import { useNavigate } from "react-router-dom";

const ManageBookingPage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <BoxShadow className={styles.container}>
        <BookingForm onCancel={() => navigate(-1)} />
      </BoxShadow>
    </BaseLayout>
  );
};

export default ManageBookingPage;
