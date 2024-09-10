import { CartType } from "../../libs/types";

export const SET_CART_ITEMS = "SET_CART_ITEMS";
export const GET_TOTAL_PRICE = "GET_TOTAL_PRICE";
export const GET_TOTAL_COUNT = "GET_TOTAL_COUNT";

export const setCartItems = (items: CartType[]) => ({
  type: SET_CART_ITEMS,
  payload: items,
});

export const getTotalPrice = () => ({
  type: GET_TOTAL_PRICE,
});

export const getTotalCount = () => ({
  type: GET_TOTAL_COUNT,
});
