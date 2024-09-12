import { createSelector } from "reselect";
import { RootState } from "../../../store";

const selectCartItems = (state: RootState) => state.cart.items;
const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
const selectCartTotalCount = (state: RootState) => state.cart.totalCount;

export const selectCartData = createSelector(
  [selectCartItems, selectCartTotalPrice, selectCartTotalCount],
  (items, totalPrice, totalCount) => ({
    items,
    totalPrice,
    totalCount,
  })
);
