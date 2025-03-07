import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const favorietsContext = createContext();
function FavorietsContextProvider({ children }) {
  const [addToFavorites, setAddToFavorites] = useLocalStorage("favorites", []);
  function handelAddToFavorites(product) {
    setAddToFavorites((addToFavorites) => {
      if (addToFavorites.find((item) => item._id == product?._id)) {
        return addToFavorites.filter((item) => item._id !== product?._id);
      } else {
        return [...addToFavorites, product];
      }
    });
  }
  function productExists(product) {
    return addToFavorites.find((item) => item._id == product?._id);
  }
  function totalFavorites() {
    return addToFavorites.length;
  }
  return (
    <favorietsContext.Provider
      value={{
        handelAddToFavorites,
        productExists,
        addToFavorites,
        totalFavorites,
      }}
    >
      {children}
    </favorietsContext.Provider>
  );
}
function useAddToFavorites() {
  return useContext(favorietsContext);
}
export { FavorietsContextProvider, useAddToFavorites };
