import { CartType } from "@/libs/types";
import { SET_CART_ITEMS } from "@/redux/cart/actions";

const initialState = {
  items: [] as CartType[],
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
