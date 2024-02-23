import { Table } from "antd";
import { useBookings } from "../BookingsProvider/context";
import { COLUMNS } from "./constants";

type TBookingTable = {
  className?: string;
};

const BookingTable = ({ className = '' }: TBookingTable) => {
  const { bookings } = useBookings();

  const dataSource = bookings.map((booking) => ({ key: booking.id, ...booking }));

  return (
    <Table
      className={className}
      columns={COLUMNS}
      dataSource={dataSource}
    />
  )
};

export default BookingTable;
