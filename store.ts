import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { cartReducer } from "./src/redux/cart/reducers";
import { productsReducer } from "./src/redux/products/reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export const store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type RootState = ReturnType<typeof rootReducer>;
