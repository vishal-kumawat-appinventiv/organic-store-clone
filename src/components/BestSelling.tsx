import { useContext, useMemo } from "react";
import { MyContext } from "../libs/MyContext";
import ProductComponent from "./ProductComponent";
import { leafImg } from "../libs/mock";

const BestSelling = () => {
  const { products } = useContext(MyContext);
  const bestSellingProducts = useMemo(() => {
    return products.filter((p) => p.bestSelling);
  }, [products]);

  return (
    <>
      <div className="my-28 max-w-7xl mx-auto p-3">
        <h1 className="text-center text-4xl font-bold">
          Best Selling Products
        </h1>
        <div className="relative min-h-16 my-3">
          <img
            src={leafImg}
            alt="leaf-img"
            className="absolute top-0 left-1/2 transform -translate-x-1/2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {bestSellingProducts.map((p) => {
            return <ProductComponent key={p.id} data={p} />;
          })}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
