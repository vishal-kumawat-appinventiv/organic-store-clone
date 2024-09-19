import { Link } from "react-router-dom";
import { ProductType } from "@/libs/types";

const ProductComponent = ({ data }: { data: ProductType }) => {
  return (
    <>
      <div key={data.id} className="relative flex flex-col text-center">
        <Link to={`/product/${data.name.replace(/\s+/g, "-").toLowerCase()}`}>
          <div className="w-full h-full">
            <img src={data.img} alt="img" className="w-full" />
          </div>
        </Link>
        <p className="text-gray-600">{data.category}</p>
        <Link to={`/product/${data.name.replace(/\s+/g, "-").toLowerCase()}`}>
          <p className="font-bold">{data.name}</p>
        </Link>
        <div>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>☆</span>
          ))}
        </div>
        <p className="text-sm font-bold">£ {data.price}</p>
        {data.sale && (
          <div className="absolute bg-[#8cc44b] text-sm rounded-full py-2 px-1 top-[-3px] right-0">
            <p>Sale!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductComponent;
