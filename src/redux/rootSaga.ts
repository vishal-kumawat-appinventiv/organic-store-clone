import { all, fork } from "redux-saga/effects";
import { loadProductsOnSagaInit, watchLoadProducts } from "./products/sagas";

export default function* rootSaga() {
  yield all([fork(loadProductsOnSagaInit), fork(watchLoadProducts)]);
}
