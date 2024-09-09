import { CartType } from "../../libs/types";
import { SET_CART_ITEMS, GET_TOTAL_PRICE, GET_TOTAL_COUNT } from "./actions";

const initialState: CartType[] = [];

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      // TODO check if old cart items are already in the cart
      return {
        ...state,
        ...action.payload,
      };

    case GET_TOTAL_PRICE:
      return state.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

    case GET_TOTAL_COUNT:
      return state.reduce((total, item) => total + item.quantity, 0);

    default:
      return state;
  }
};
