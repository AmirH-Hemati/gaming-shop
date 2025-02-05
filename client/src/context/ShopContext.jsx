import { createContext, useContext, useState } from "react";

const shopContext = createContext();
function ShopContextProvider() {
  const [addToCart, setAddToCart] = useState([]);
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
  return (
    <shopContext.Provider
      value={{ addToCart, handelIncreaseProduct, handelDecreaseProduct }}
    ></shopContext.Provider>
  );
}
function useAddToCart() {
  return useContext(shopContext);
}
export { ShopContextProvider, useAddToCart };
