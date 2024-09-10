import { all, fork } from "redux-saga/effects";
import { loadProducts } from "./products/sagas";

export default function* rootSaga() {
  yield all([fork(loadProducts)]);
}
