import { CartType } from "../../libs/types";
import { SET_CART_ITEMS, GET_TOTAL_PRICE, GET_TOTAL_COUNT } from "./actions";

const initialState = {
  items: [] as CartType[],
  totalPrice: 0,
  totalCount: 0,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case GET_TOTAL_PRICE:
      const totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return {
        ...state,
        totalPrice,
      };
    case GET_TOTAL_COUNT:
      const totalCount = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      return {
        ...state,
        totalCount,
      };
    default:
      return state;
  }
};
