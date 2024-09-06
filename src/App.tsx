import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:prodName" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
