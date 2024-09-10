import { CartType } from "../../libs/types";
import { SET_CART_ITEMS, GET_TOTAL_PRICE, GET_TOTAL_COUNT, FETCH_CART_ITEMS, FETCH_CART_ITEMS_ERROR } from "./actions";

const initialState = {
  items: [] as CartType[],
  totalPrice: 0,
  totalCount: 0,
  loading: false,
  error: null as string | null,
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return {
        ...state,
        loading: true,
        error: null,
      };
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
    case FETCH_CART_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
