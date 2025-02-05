import { createContext, useContext, useState } from "react";

const favorietsContext = createContext();
function FavorietsContextProvider({ children }) {
  const [addToFavorites, setAddToFavorites] = useState([]);
  function handelAddToFavorites(product) {
    setAddToFavorites((addToFavorites) => {
      if (addToFavorites.find((item) => item._id == product._id)) {
        return addToFavorites.filter((item) => item._id !== product._id);
      } else {
        return [...addToFavorites, product];
      }
    });
  }
  console.log(addToFavorites);
  return (
    <favorietsContext.Provider value={{ handelAddToFavorites }}>
      {children}
    </favorietsContext.Provider>
  );
}
function useAddToFavorites() {
  return useContext(favorietsContext);
}
export { FavorietsContextProvider, useAddToFavorites };
