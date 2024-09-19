import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { routes } from "@/libs/mock";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsThunk } from "@/redux/products/actions";
import { AppDispatch } from "../store";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("Dispatch Products Thunk");
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
