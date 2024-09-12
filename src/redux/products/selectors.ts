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

const selectProductsByCategory = createSelector(
  [selectProducts, selectCategory],
  (products: ProductType[], category: string) => {
    if (category === "shop") {
      return products;
    }
    return products.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }
);

const selectSaleProducts = createSelector(
  [selectProducts],
  (products: ProductType[]) => {
    return products.filter((product) => product.sale);
  }
);

const selectSearch = (_: RootState, search: string) => search;
const selectProductsBySearch = createSelector(
  [selectProducts, selectSearch],
  (products: ProductType[], search: string) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }
);

const selectFilter = (
  _: RootState,
  filter: { minValue: number; maxValue: number }
) => filter;
const selectProductsByFilter = createSelector(
  [selectProducts, selectFilter],
  (products: ProductType[], filter: { minValue: number; maxValue: number }) => {
    return products.filter(
      (product) =>
        product.price >= filter.minValue && product.price <= filter.maxValue
    );
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
  selectProductsByCategory,
  selectSaleProducts,
  selectProductsBySearch,
  selectProductsByFilter,
};
