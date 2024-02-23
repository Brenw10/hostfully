import { useReducer } from "react";
import { BookingsContext } from "./context";
import BookingsReducer from "./reducer";
import { INITIAL_VALUE } from "./constants";

type TBookingsProvider = {
  children: React.ReactNode;
};

const BookingsProvider = ({ children }: TBookingsProvider) => {
  const [bookings, dispatch] = useReducer(BookingsReducer, INITIAL_VALUE);

  return (
    <BookingsContext.Provider value={{ bookings, dispatch }}>
      {children}
    </BookingsContext.Provider>
  )
};


export default BookingsProvider;
