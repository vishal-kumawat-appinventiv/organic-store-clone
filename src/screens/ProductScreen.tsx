import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CartType, ProductType } from "../libs/types";
import { useDispatch } from "react-redux";
import { setCartItems } from "../redux/cart/actions";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ProductScreen = () => {
  const dispatch = useDispatch();

  const { prodName } = useParams();
  const currentPath = prodName!.replace(/-/g, " ");

  const {
    items: products,
    error,
    loading,
  } = useSelector((state: RootState) => state.products);

  const cart = useSelector((state: RootState) => state?.cart?.items);

  const [count, setCount] = useState(1);

  const product = useMemo(() => {
    return products.find((product: ProductType) =>
      product.name.toLowerCase().includes(currentPath)
    );
  }, [products, currentPath]);

  const handleAddToCart = () => {
    const existingItem = cart.find((item: CartType) => item.id === product?.id);

    if (existingItem) {
      dispatch(
        setCartItems(
          cart.map((item: CartType) =>
            item.id === product?.id
              ? { ...item, quantity: item.quantity + count }
              : item
          )
        )
      );
    } else {
      dispatch(
        setCartItems([
          ...cart,
          {
            id: product?.id!,
            img: product?.img!,
            productName: product?.name!,
            quantity: count!,
            price: product?.price!,
          },
        ])
      );
    }
  };

  return (
    <>
      <div className="bg-[#f8f6f3] py-20">
        <div className="max-w-7xl mx-auto p-3">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error={error as string} />
          ) : (
            <>
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
                      <button
                        onClick={handleAddToCart}
                        className="px-10 rounded py-1 bg-[#6a9739] text-white ml-3"
                      >
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
              <RelatedProducts category={product?.category!} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
