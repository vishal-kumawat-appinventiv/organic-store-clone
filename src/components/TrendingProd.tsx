import { useEffect, useMemo } from "react";
import ProductComponent from "./ProductComponent";
import { leafImg } from "../libs/mock";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { ProductType } from "../libs/types";
import { fetchProducts } from "../redux/products/actions";
import { useDispatch } from "react-redux";

const TrendingProd = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);
  const TrendingProds = useMemo(() => {
    return products.filter((p: ProductType) => p.trending);
  }, [products]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="my-28 max-w-7xl mx-auto p-3">
        <h1 className="text-center text-4xl font-bold">Trending Products</h1>
        <div className="relative min-h-16 my-3">
          <img
            src={leafImg}
            alt="leaf-img"
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {TrendingProds.map((p: ProductType) => {
            return <ProductComponent key={p.id} data={p} />;
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingProd;
