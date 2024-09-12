import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { ProductType } from "../../libs/types";

const selectProducts = (state: RootState) => state.products.items;
const selectLoading = (state: RootState) => state.products.loading;
const selectError = (state: RootState) => state.products.error;

const selectMemoProductsItem = createSelector(
  [selectProducts],
  (items: ProductType[]) => items
);

export const selectProductsData = createSelector(
  [selectMemoProductsItem, selectLoading, selectError],
  (items, loading, error) => ({
    items,
    loading,
    error,
  })
);
