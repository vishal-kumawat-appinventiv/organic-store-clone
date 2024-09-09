import { ProductType } from "../../libs/types";

export const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = (items: ProductType[]) => ({
  type: SET_PRODUCTS,
  payload: items,
});
