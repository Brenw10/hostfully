import { Button, Card, DatePicker, Flex, Input } from "antd";
import * as styles from './styles.css';
import { Controller, useForm } from "react-hook-form";
import { TBooking } from "../types";
import { useBookings } from "../BookingsProvider/context";
import InputLabel from "../../components/InputLabel";

type TBookingForm = {
  onCancel: () => void;
};

const BookingForm = ({ onCancel }: TBookingForm) => {
  const { handleSubmit, formState: { errors }, control } = useForm<TBooking>();
  const { dispatch, bookings } = useBookings();
  console.log(bookings);

  const onSubmit = (form: TBooking) => {
    dispatch({ type: 'ADD', payload: form });
  };

  return (
    <Card title='Create a booking' classNames={{ header: styles.titleContainer }}>
      <Flex vertical gap='middle'>
        <Controller
          control={control}
          rules={{ required: 'This field is required' }}
          name="property"
          render={({ field: { onChange } }) => (
            <InputLabel
              label="Property Name"
              error={errors?.property?.message as string}
            >
              <Input
                placeholder="Property name"
                onChange={onChange}
                status={errors.property && 'error'}
              />
            </InputLabel>
          )}
        />
        <Controller
          rules={{ required: 'This field is required' }}
          control={control}
          name='dates'
          render={({ field: { onChange }, fieldState: { error } }) => (
            <InputLabel
              label="Booking Dates"
              error={error?.message as string}
            >
              <DatePicker.RangePicker onChange={onChange} status={error && 'error'} />
            </InputLabel>
          )}
        />
        <Flex gap='middle'>
          <Button type="default" className={styles.button} onClick={onCancel}>
            Cancel
          </Button>
          <Button type="primary" className={styles.button} onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default BookingForm;
