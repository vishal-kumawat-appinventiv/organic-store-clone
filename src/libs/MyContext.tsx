import { createContext, useState, ReactNode } from "react";

interface CartType {
  img: string;
  productName: string;
  quantity: number;
  price: number;
}

interface MyContextType {
  cart: CartType[];
  setCart: React.Dispatch<React.SetStateAction<CartType[]>>;
}

const defaultContextValue: MyContextType = {
  cart: [],
  setCart: () => {},
};

export const MyContext = createContext<MyContextType>(defaultContextValue);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Array<CartType>>([
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
      productName: "Assorted Coffee",
      quantity: 2,
      price: 35,
    },
    {
      img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg",
      productName: "Handpicked Red Chillies",
      quantity: 1,
      price: 19,
    },
  ]);

  return (
    <MyContext.Provider value={{ cart, setCart }}>
      {children}
    </MyContext.Provider>
  );
};
