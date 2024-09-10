import React from "react";
import { X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CartType } from "../libs/types";
import { useDispatch } from "react-redux";
import { setCartItems } from "../redux/cart/actions";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { items: cart, totalPrice } = useSelector(
    (state: RootState) => state.cart
  );

  const handleDeleteItem = (val: number) => () => {
    dispatch(setCartItems(cart.filter((item: CartType) => item.id !== val)));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "min(90vw, 650px)" }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-bold">Shopping Cart</span>
          <button
            className="text-gray-800 hover:text-gray-600"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col h-[75vh]">
          <div className="flex-1">
            {cart.length === 0 ? (
              <div className="p-4 text-center">No items in cart</div>
            ) : (
              cart.map((item: CartType) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border-b"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.img}
                      alt={item.productName}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-bold">{item.productName}</p>
                      <p className="text-sm text-gray-600">
                        {item.quantity} x £{item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="text-gray-800 hover:text-gray-600 border-[1px] border-gray-800 rounded-full p-1"
                      onClick={handleDeleteItem(item?.id)}
                    >
                      <X size={10} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex items-center justify-between p-4 border-t border-b">
            <span className="font-bold">Subtotal</span>
            <span className="font-bold">£{totalPrice.toString()}</span>
          </div>
        </div>
        <div className="p-4">
          <button className="w-full bg-[#6a9739] text-white py-3 rounded-md mb-3">
            VIEW CART
          </button>
          <button className="w-full bg-[#6a9739] text-white py-3 rounded-md">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Drawer;
