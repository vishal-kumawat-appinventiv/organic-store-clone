import { put, call, takeEvery } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  fetchProductsSuccess,
  fetchProductsError,
  initLoadProducts,
} from "./actions";
import { ProductType } from "../../libs/types";

const fetchProductsApi = async () => {
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

export function* loadProducts() {
  try {
    const products: ProductType[] = yield call(fetchProductsApi);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(
      fetchProductsError(
        error instanceof Error ? error.message : "An unknown error occured"
      )
    );
  }
}

export function* loadProductsOnSagaInit() {
  yield put(initLoadProducts());
  yield call(loadProducts);
}

export function* watchLoadProducts() {
  yield takeEvery(FETCH_PRODUCTS, loadProducts);
}
