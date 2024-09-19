import { leafImg } from "@/libs/mock";
import { useSelector } from "react-redux";
import { ProductType } from "@/libs/types";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { productsSelectors } from "@/redux/products/selectors";
import { lazy, Suspense } from "react";
const ProductComponent = lazy(() => import("@/components/ProductComponent"));

const TrendingProd = () => {
  const loading = useSelector(productsSelectors?.selectLoading);
  const error = useSelector(productsSelectors?.selectError);
  const TrendingProds = useSelector(productsSelectors?.selectTrendingProducts);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error as string} />
      ) : (
        <>
          <div className="my-28 max-w-7xl mx-auto p-3">
            <h1 className="text-center text-4xl font-bold">
              Trending Products
            </h1>
            <div className="relative min-h-16 my-3">
              <img
                src={leafImg}
                alt="leaf-img"
                className="absolute top-0 left-1/2 transform -translate-x-1/2"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {TrendingProds.map((p: ProductType) => (
                <Suspense key={p.id} fallback={<Loading />}>
                  <ProductComponent data={p} />
                </Suspense>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TrendingProd;
