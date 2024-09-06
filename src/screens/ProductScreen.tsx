import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useMemo } from "react";
import { MyContext } from "../libs/MyContext";

const ProductScreen = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2].replace(/-/g, " ");
  const { products } = useContext(MyContext);

  const product = useMemo(() => {
    return products.find((product) =>
      product.name.toLowerCase().includes(currentPath)
    );
  }, [products, currentPath]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default ProductScreen;
