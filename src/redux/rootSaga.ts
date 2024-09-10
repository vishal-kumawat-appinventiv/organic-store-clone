import { all } from "redux-saga/effects";
import { watchLoadCartItems } from "./cart/sagas";
import { watchLoadProducts } from "./products/sagas";

export default function* rootSaga() {
  yield all([watchLoadCartItems(), watchLoadProducts()]);
}
