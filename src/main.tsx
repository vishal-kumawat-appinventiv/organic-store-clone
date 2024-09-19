import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "../store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary
    fallback={<div className="text-5xl p-8">{"Something went wrong :( "}</div>}
  >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ErrorBoundary>
);
