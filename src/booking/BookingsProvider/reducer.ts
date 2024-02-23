import { TBooking } from "../types";
import { ACTIONS } from "./constants";

export type TAction = {
  type: typeof ACTIONS[keyof typeof ACTIONS];
  payload: TBooking;
};

const BookingsReducer = (state: TBooking[], action: TAction) => {
  console.log(state, action)

  return state;
}

export default BookingsReducer;
