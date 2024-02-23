import { TBooking } from "../types";
import { ACTIONS } from "./constants";

export type TAction = {
  type: typeof ACTIONS[keyof typeof ACTIONS];
  payload: TBooking;
};

const BookingsReducer = (state: TBooking[], action: TAction) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];
    case ACTIONS.UPDATE:
      return state.map(booking => booking.id === action.payload.id ? action.payload : booking);
    case ACTIONS.REMOVE:
      return state.filter(booking => booking.id !== action.payload.id);
    default:
      return state;
  }
}

export default BookingsReducer;
