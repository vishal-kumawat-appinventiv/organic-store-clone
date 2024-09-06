import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useMemo, useState } from "react";
import { MyContext } from "../libs/MyContext";
import { Search } from "lucide-react";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";

const ProductScreen = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2].replace(/-/g, " ");
  const { products } = useContext(MyContext);

  const [count, setCount] = useState(1);

  const product = useMemo(() => {
    return products.find((product) =>
      product.name.toLowerCase().includes(currentPath)
    );
  }, [products, currentPath]);

  return (
    <>
      <Navbar />
      <div className="bg-[#f8f6f3] py-20">
        <div className="max-w-7xl mx-auto p-3">
          <div className="mainGrid grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col1 relative">
              <img src={product?.img} alt="img" />
              <p className="bg-white rounded-full p-2 absolute top-2 right-2">
                <Search />
              </p>
            </div>
            <div className="col2">
              <div className="flex flex-col gap-4">
                <div>
                  <h1 className="font-bold text-3xl">{product?.name}</h1>
                </div>
                <div className="flex items-center">
                  <p className="font-bold text-2xl">${product?.price}</p>
                  <p className="text-gray-600">+ Free Shipping</p>
                </div>
                <div>
                  <p className="text-gray-600">{product?.desc}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 border-2 border-gray-200 hover:bg-[#6a9739]"
                    onClick={() => count > 1 && setCount(count - 1)}
                  >
                    -
                  </button>
                  <p className="px-3 py-1 border-t-2 border-b-2 border-l-0 border-r-0 border-gray-200">
                    {count}
                  </p>
                  <button
                    className="px-3 py-1 border-2 border-gray-200 hover:bg-[#6a9739]"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                  <button className="px-10 rounded py-1 bg-[#6a9739] text-white ml-3">
                    Add to Cart
                  </button>
                </div>
                <div className="border-t">
                  <p>Category: {product?.category}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t mt-5 flex flex-col">
            <h4 className="text-xl mt-3">Description</h4>
            <p className="text-gray-600">{product?.desc}</p>
          </div>
          {/* related prod */}
          <RelatedProducts category={product?.category}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductScreen;
