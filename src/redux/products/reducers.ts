import { ProductType } from "../../libs/types";
import { SET_PRODUCTS } from "./actions";
import { DummyProducts } from "../../libs/mock";

const initialState: ProductType[] = DummyProducts;

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;

    default:
      return state;
  }
};
