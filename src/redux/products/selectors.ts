import { createSelector } from "reselect";
import { RootState } from "../../../store";
import { ProductType } from "../../libs/types";

const selectProducts = (state: RootState) => state.products.items;
const selectLoading = (state: RootState) => state.products.loading;
const selectError = (state: RootState) => state.products.error;

const selectBestSellingProducts = createSelector(
  [selectProducts],
  (items: ProductType[]) => {
    return items.filter((item) => item.bestSelling);
  }
);

const selectTrendingProducts = createSelector(
  [selectProducts],
  (items: ProductType[]) => {
    return items.filter((item) => item.trending);
  }
);

const selectCurrentPath = (_: RootState, currentPath: string) =>
  currentPath.toLowerCase();
const selectProductByName = createSelector(
  [selectProducts, selectCurrentPath],
  (products: ProductType[], currentPath: string) => {
    return products.find((product) =>
      product.name.toLowerCase().includes(currentPath)
    );
  }
);

const selectCategory = (_: RootState, category: string) => category;
const selectRelatedProdsFirstThree = createSelector(
  [selectProducts, selectCategory],
  (products: ProductType[], category: string) => {
    return products
      .filter((product) => product.category === category)
      .slice(0, 3);
  }
);

export const productsSelectors = {
  selectProducts,
  selectLoading,
  selectError,
  selectBestSellingProducts,
  selectTrendingProducts,
  selectProductByName,
  selectRelatedProdsFirstThree,
};
