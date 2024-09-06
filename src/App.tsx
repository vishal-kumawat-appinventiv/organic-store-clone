import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ProductScreen from "./screens/ProductScreen";
import CategoryScreen from "./screens/CategoryScreen";
import AboutScreen from "./screens/AboutScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/product/:prodName" element={<ProductScreen />} />
          <Route path="/category/:categoryType" element={<CategoryScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
