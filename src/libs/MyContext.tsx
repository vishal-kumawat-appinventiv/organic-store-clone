import { createContext, useState, ReactNode } from "react";
import { CartType, ProductType } from "./types";
import { DummyProducts } from "./mock";

interface MyContextType {
  cart: CartType[];
  products: ProductType[];
  setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const defaultContextValue: MyContextType = {
  cart: [],
  setCart: () => {},
  products: [],
  setProducts: () => {},
};

export const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<ProductType>>([
    ...DummyProducts,
  ]);

  const [cart, setCart] = useState<Array<CartType>>([]);

  return (
    <MyContext.Provider value={{ cart, setCart, products, setProducts }}>
      {children}
    </MyContext.Provider>
  );
};
