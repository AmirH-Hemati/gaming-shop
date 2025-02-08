import { Heart } from "iconsax-react";
import { useAddToFavorites } from "../context/FavorietsContext";

function AddToFavorite({ product }) {
  const { handelAddToFavorites, productExists } = useAddToFavorites();
  return (
    <Heart
      size="32"
      color={`${productExists(product) ? "white" : "#0998A8"}`}
      variant="Bold"
      onClick={() => handelAddToFavorites(product)}
      className="cursor-pointer"
    />
  );
}

export default AddToFavorite;
