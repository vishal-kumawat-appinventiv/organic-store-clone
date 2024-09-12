import { CartType } from "../../libs/types";

export const SET_CART_ITEMS = "SET_CART_ITEMS";

export const setCartItems = (items: CartType[]) => ({
  type: SET_CART_ITEMS,
  payload: items,
});
