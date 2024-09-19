import { ProductType } from "@/libs/types";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const fetchProductsThunk = (): any => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: FETCH_PRODUCTS });
      console.log("FETCH_PRODUCTS");
      const response = await fetch(
        "https://run.mocky.io/v3/fad4827e-433c-4e1b-af10-08548ded3894"
      );
      const products: ProductType[] = await response.json();
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
      console.log("FETCH_PRODUCTS_SUCCESS");
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
      console.log("FETCH_PRODUCTS_ERROR");
    }
  };
};
