import { takeEvery, put, call } from "redux-saga/effects";
import {
  fetchProducts,
  FETCH_PRODUCTS,
  fetchProductsSuccess,
  fetchProductsError,
} from "./actions";
import { ProductType } from "../../libs/types";

const fetchProductsApi = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/fad4827e-433c-4e1b-af10-08548ded3894"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to load products");
  }
};

function* loadProducts() {
  try {
    const products: ProductType[] = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError("Failed to load products"));
  }
}

export function* watchLoadProducts() {
  yield takeEvery(FETCH_PRODUCTS, loadProducts);
}
