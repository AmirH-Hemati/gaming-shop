import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const shopContext = createContext();
function ShopContextProvider({ children }) {
  const [addToCart, setAddToCart] = useLocalStorage("shoppingCart", []);
  function handelIncreaseProduct(id) {
    setAddToCart((addToCart) => {
      const product = addToCart.find((product) => product.id == id);
      if (!product) {
        return [...addToCart, { id, qty: 1 }];
      } else {
        return addToCart.map((product) =>
          product.id == id ? { ...product, qty: product.qty + 1 } : product
        );
      }
    });
  }
  function handelDecreaseProduct(id) {
    setAddToCart((addToCart) => {
      const product = addToCart.find((product) => product.id == id);
      if (product.qty == 0) {
        return addToCart.filter((product) => product.id !== id);
      } else {
        return addToCart.map((product) =>
          product.id == id ? { ...product, qty: product.qty - 1 } : product
        );
      }
    });
  }
  function totalQty() {
    return addToCart.reduce((cur, sum) => cur + sum.qty, 0);
  }
  return (
    <shopContext.Provider
      value={{
        addToCart,
        handelIncreaseProduct,
        handelDecreaseProduct,
        totalQty,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
function useAddToCart() {
  return useContext(shopContext);
}
export { ShopContextProvider, useAddToCart };
