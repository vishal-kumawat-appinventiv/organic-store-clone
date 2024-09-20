import { useParams } from "react-router-dom";
import { Search } from "lucide-react";
import RelatedProducts from "@/components/RelatedProducts";
import { useSelector } from "react-redux";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { productsSelectors } from "@/redux/products/selectors";
import { RootState } from "../../store";
import AddToCartBtns from "@/components/AddToCartBtns";

const ProductScreen = () => {
  const { prodName } = useParams();

  const currentPath = prodName!.replace(/-/g, " ");

  const loading = useSelector(productsSelectors?.selectLoading);
  const error = useSelector(productsSelectors?.selectError);

  const product = useSelector((state: RootState) =>
    productsSelectors.selectProductByName(state, currentPath)
  );

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
                      <AddToCartBtns product={product!} />
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
