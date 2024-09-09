import { Link } from "react-router-dom";
import { ProductType } from "../libs/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const RelatedProducts = ({
  category,
}: {
  category: ProductType["category"];
}) => {
  const products = useSelector((state: RootState) => state.products);
  return (
    <>
      <div>
        <h1 className="my-5 text-3xl font-bold">Related products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {products
            .filter((p: ProductType) => p.category === category)
            .slice(0, 3)
            .map((p: ProductType) => {
              return (
                <div key={p.id} className="relative flex flex-col text-center">
                  <Link
                    to={`/product/${p.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <div className="w-full h-full">
                      <img src={p.img} alt="img" className="w-full" />
                    </div>
                  </Link>
                  <p className="text-gray-600">{p.category}</p>
                  <Link
                    to={`/product/${p.name.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    <p className="font-bold">{p.name}</p>
                  </Link>
                  <div>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>☆</span>
                    ))}
                  </div>
                  <p className="text-sm font-bold">£ {p.price}</p>
                  {p.sale && (
                    <div className="absolute bg-[#8cc44b] text-sm rounded-full py-2 px-1 top-[-3px] right-0">
                      <p>Sale!</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
