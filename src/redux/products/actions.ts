import { ProductType } from "../../libs/types";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (products: ProductType[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsError = (error: string) => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: error,
});
