import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { CartType } from "@/libs/types";

const selectCartItems = (state: RootState) => state.cart.items;

const selectTotalPrice = createSelector(
  [selectCartItems],
  (items: CartType[]) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)
);

const selectTotalCount = createSelector(
  [selectCartItems],
  (items: CartType[]) => items.reduce((total, item) => total + item.quantity, 0)
);

export const cartSelectors = {
  selectCartItems,
  selectTotalPrice,
  selectTotalCount,
};
