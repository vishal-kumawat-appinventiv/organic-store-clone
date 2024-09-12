import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { ProductType } from "../../libs/types";

export const selectProducts = (state: RootState) => state.products.items;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

export const selectBestSellingProducts = createSelector(
  [selectProducts],
  (items: ProductType[]) => {
    return items.filter((item) => item.bestSelling);
  }
);

export const selectTrendingProducts = createSelector(
  [selectProducts],
  (items: ProductType[]) => {
    return items.filter((item) => item.trending);
  }
);
