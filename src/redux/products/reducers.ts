import { ProductType } from "@/libs/types";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "@/redux/products/actions";

const initialState = {
  items: [] as ProductType[],
  loading: false,
  error: null as string | null,
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
