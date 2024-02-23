import { Button, Card, DatePicker, Flex, Input } from "antd";
import BaseLayout from "../../components/BaseLayout";
import * as styles from './styles.css';
import { useNavigate } from "react-router-dom";
import BoxShadow from "../../components/BoxShadow";
import { useForm } from "react-hook-form";
import UnderFieldError from "../../components/UnderFieldError";

const ManageBookingPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onCancel = () => navigate(-1);

  const onSubmit = () => {

  };
  console.log(errors);
  return (
    <BaseLayout>
      <BoxShadow className={styles.container}>
        <Card title='Create a booking' classNames={{ header: styles.titleContainer }}>
          <Flex vertical gap='middle'>
            <div>
              <Input
                placeholder="Property name"
                {...register('property', { required: 'This field is required' })}
                status={errors.property && 'error'}
              />
              {errors.property && <UnderFieldError message={errors.property.message as string} />}
            </div>
            <DatePicker.RangePicker />
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
      </BoxShadow>
    </BaseLayout>
  );
};

export default ManageBookingPage;
