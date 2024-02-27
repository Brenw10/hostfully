import { Button, Modal, Space, Table } from "antd";
import { useBookings } from "../BookingsProvider/context";
import { COLUMNS } from "./constants";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { TBooking, TBookingDates } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as styles from './styles.css';

type TBookingTable = {
  className?: string;
};

const BookingTable = ({ className = '' }: TBookingTable) => {
  const { bookings, dispatch } = useBookings();
  const navigate = useNavigate();
  const [deleteBooking, setDeleteBooking] = useState<TBooking | null>(null);
  const dataSource = bookings.map((booking) => ({ key: booking.id, ...booking }));

  const onDelete = () => {
    dispatch({ type: 'REMOVE', payload: deleteBooking! });
    setDeleteBooking(null);
  };

  const actions = {
    title: 'Actions',
    key: 'actions',
    render: (_: TBookingDates, record: TBooking) => (
      <Space size="middle">
        <Button
          type="link"
          size="small"
          onClick={() => navigate(`/booking/${record.id}`)}
          aria-label="Edit button"
        >
          <EditOutlined />
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => setDeleteBooking(record)}
          aria-label="Delete button"
        >
          <DeleteOutlined />
        </Button>
      </Space>
    ),
  };

  return (
    <>
      <Table
        className={`${styles.table} ${className}`}
        columns={[...COLUMNS, actions]}
        dataSource={dataSource}
      />
      <Modal
        title="Confirm your action"
        open={Boolean(deleteBooking)}
        onOk={onDelete}
        onCancel={() => setDeleteBooking(null)}
      >
        <p>Are you sure you want to delete your booking on <strong>{deleteBooking?.property}?</strong></p>
      </Modal>
    </>
  )
};

export default BookingTable;
