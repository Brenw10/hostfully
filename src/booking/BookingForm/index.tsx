import { Button, Card, DatePicker, Flex, Input } from "antd";
import * as styles from './styles.css';
import { Controller, useForm } from "react-hook-form";
import { TBooking } from "../types";
import { useBookings } from "../BookingsProvider/context";
import InputLabel from "../../components/InputLabel";
import dayjs, { Dayjs } from "dayjs";
import isBetween from 'dayjs/plugin/isBetween';
import { nanoid } from "nanoid";

dayjs.extend(isBetween);

type TBookingForm = {
  onCancel: () => void;
  onSubmitted: (form: TBooking) => void;
  className?: string;
  booking?: TBooking;
};

const BookingForm = ({ className = '', onCancel, onSubmitted, booking }: TBookingForm) => {
  const { handleSubmit, formState: { errors }, control, reset }
    = useForm<TBooking>({ defaultValues: booking });
  const { dispatch, bookings } = useBookings();

  const onSubmit = (form: TBooking) => {
    if (booking) {
      dispatch({ type: 'UPDATE', payload: form });
    } else {
      dispatch({ type: 'ADD', payload: { ...form, id: nanoid() } });
    }
    reset();
    onSubmitted(form);
  };

  const disableDate = (current: Dayjs) => {
    const isPreviousDates = current < dayjs().endOf('day');

    const isDatesBeingEdited = booking && current.isBetween(...booking.dates, 'day', '[]');

    const isOverlapping = bookings.some(booking => current.isBetween(...booking.dates, 'day', '[]'));

    return isPreviousDates || (!isDatesBeingEdited && isOverlapping);
  };

  return (
    <Card
      title='Create a booking'
      className={`${styles.container} ${className}`}
      classNames={{ header: styles.titleContainer }}
    >
      <Flex vertical gap='middle'>
        <Controller
          control={control}
          rules={{ required: 'This field is required' }}
          name="property"
          render={({ field: { onChange, value } }) => (
            <InputLabel
              label="Property Name"
              error={errors?.property?.message as string}
            >
              <Input
                placeholder="Property name"
                onChange={onChange}
                value={value}
                status={errors.property && 'error'}
              />
            </InputLabel>
          )}
        />
        <Controller
          rules={{ required: 'This field is required' }}
          control={control}
          name='dates'
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputLabel
              label="Booking Dates"
              error={error?.message as string}
            >
              <DatePicker.RangePicker
                onChange={onChange}
                status={error && 'error'}
                disabledDate={disableDate}
                value={value}
              />
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
