import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MyProvider } from "./libs/MyContext.tsx";
import { Provider } from "react-redux";
import { store } from "../store.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      {/* <MyProvider> */}
      <App />
      {/* </MyProvider> */}
    </Provider>
  </>
);
