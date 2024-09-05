import React from "react";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
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
        <div className="p-4">
          <p>Cart Items</p>
          <p>Cart Items</p>
          <p>Cart Items</p>
        </div>
      </div>
    </>
  );
};

export default Drawer;
