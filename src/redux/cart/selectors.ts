import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { CartType } from "../../libs/types";

const selectCartItems = (state: RootState) => state.cart.items;
const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;
const selectCartTotalCount = (state: RootState) => state.cart.totalCount;

const selectMemoizedCartItems = createSelector(
  [selectCartItems],
  (items: CartType[]) => items
);

export const selectCartData = createSelector(
  [selectMemoizedCartItems, selectCartTotalPrice, selectCartTotalCount],
  (items, totalPrice, totalCount) => ({
    items,
    totalPrice,
    totalCount,
  })
);
