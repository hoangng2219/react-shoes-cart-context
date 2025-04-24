import React, { useState } from "react";
import { IProduct } from "../types";

interface IAppContext {
  carts: IProduct[];
  addCarts: (product: IProduct) => void;
  removeCarts: (product: IProduct) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

const AppContext = React.createContext<IAppContext>({
  carts: [],
  addCarts: () => {},
  removeCarts: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [carts, setCarts] = useState<IProduct[]>([]);

  const addCarts = (product: IProduct) =>
    setCarts((prevCarts) => [...prevCarts, product]);

  const removeCarts = (product: IProduct) =>
    setCarts((prevCarts) => prevCarts.filter((cart) => cart.id !== product.id));

  const increaseQuantity = (productId: number) => {
    setCarts((prev) => {
      const cloneCarts = JSON.parse(JSON.stringify(prev)) as IProduct[];
      const index = cloneCarts.findIndex((item) => item.id === productId);
      cloneCarts[index].quanlity += 1;
      return cloneCarts;
    });
  };

  const decreaseQuantity = (productId: number) => {
    setCarts((prev) => {
      const cloneCarts = JSON.parse(JSON.stringify(prev)) as IProduct[];
      const index = cloneCarts.findIndex((item) => item.id === productId);
      cloneCarts[index].quanlity -= 1;

      if (cloneCarts[index].quanlity === 0) {
        removeCarts(cloneCarts[index]);
      }
      return cloneCarts;
    });
  };

  return (
    <AppContext.Provider
      value={{
        carts,
        addCarts,
        removeCarts,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
