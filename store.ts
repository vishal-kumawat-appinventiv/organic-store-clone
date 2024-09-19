import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { cartReducer } from "@/redux/cart/reducers";
import { productsReducer } from "@/redux/products/reducers";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer: any = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
