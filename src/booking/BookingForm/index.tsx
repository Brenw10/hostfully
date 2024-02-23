import { Button, Card, DatePicker, Flex, Input } from "antd";
import * as styles from './styles.css';
import { Controller, useForm } from "react-hook-form";
import UnderFieldError from "../../components/UnderFieldError";
import { TBooking } from "../types";

type TBookingForm = {
  onCancel: () => void;
};

const BookingForm = ({ onCancel }: TBookingForm) => {
  const { handleSubmit, formState: { errors }, control } = useForm<TBooking>();

  const onSubmit = (form: TBooking) => {
    console.log(form)
  };

  return (
    <Card title='Create a booking' classNames={{ header: styles.titleContainer }}>
      <Flex vertical gap='middle'>
        <Controller
          control={control}
          rules={{ required: 'This field is required' }}
          name="property"
          render={({ field: { onChange } }) => (
            <UnderFieldError message={errors?.property?.message as string}>
              <Input
                placeholder="Property name"
                onChange={onChange}
                status={errors.property && 'error'}
              />
            </UnderFieldError>
          )}
        />
        <Controller
          rules={{ required: 'This field is required' }}
          control={control}
          name='dates'
          render={({ field: { onChange }, fieldState: { error } }) => (
            <UnderFieldError message={error?.message as string}>
              <DatePicker.RangePicker onChange={onChange} status={error && 'error'} />
            </UnderFieldError>
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
