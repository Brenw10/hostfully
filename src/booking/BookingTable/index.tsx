import { Space, Table } from "antd";
import { useBookings } from "../BookingsProvider/context";
import { COLUMNS } from "./constants";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

type TBookingTable = {
  className?: string;
};

const BookingTable = ({ className = '' }: TBookingTable) => {
  const { bookings } = useBookings();

  const dataSource = bookings.map((booking) => ({ key: booking.id, ...booking }));

  const actions = {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  };

  return (
    <Table
      className={className}
      columns={[...COLUMNS, actions]}
      dataSource={dataSource}
    />
  )
};

export default BookingTable;
