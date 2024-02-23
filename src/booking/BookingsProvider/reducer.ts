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
    default:
      return state;
  }
}

export default BookingsReducer;
