import { takeEvery, put, call } from "redux-saga/effects";
import { setCartItems, FETCH_CART_ITEMS, fetchCartItemsError } from "./actions";
import { CartType } from "../../libs/types";

const fetchCartItemsApi = (): Promise<CartType[]> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([]), 1000)
  );
};

function* loadCartItems() {
  try {
    const items: CartType[] = yield call(fetchCartItemsApi);
    yield put(setCartItems(items)); // Dispatch setCartItems action
  } catch (error) {
    yield put(fetchCartItemsError("Failed to load cart items"));
  }
}

export function* watchLoadCartItems() {
  yield takeEvery(FETCH_CART_ITEMS, loadCartItems);
}
