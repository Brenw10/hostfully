import { createContext, useContext } from "react";
import { TBooking } from "../types";
import { TAction } from "./reducer";

type TBookingsContext = {
  bookings: TBooking[];
  dispatch: (action: TAction) => void;
}

export const BookingsContext = createContext<TBookingsContext>({} as TBookingsContext);

export const useBookings = () => useContext(BookingsContext);
