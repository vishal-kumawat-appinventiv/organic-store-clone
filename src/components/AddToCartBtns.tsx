import { CartType, ProductType } from "@/libs/types";
import { setCartItems } from "@/redux/cart/actions";
import { cartSelectors } from "@/redux/cart/selectors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const AddToCartBtns = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  const { prodName } = useParams();

  const cart = useSelector(cartSelectors?.selectCartItems);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [prodName]);

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
    </>
  );
};

export default AddToCartBtns;

