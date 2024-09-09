import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { cartReducer } from "./src/redux/cart/reducers";
import { productsReducer } from "./src/redux/products/reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
