import { all } from "redux-saga/effects";
import { watchLoadProducts } from "./products/sagas";

export default function* rootSaga() {
  yield all([watchLoadProducts()]);
}
