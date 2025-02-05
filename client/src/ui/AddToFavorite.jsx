import { Heart } from "iconsax-react";
import { useAddToFavorites } from "../context/FavorietsContext";

function AddToFavorite({ product }) {
  const { handelAddToFavorites } = useAddToFavorites();
  return (
    <Heart
      size="28"
      color="white"
      onClick={() => handelAddToFavorites(product)}
    />
  );
}

export default AddToFavorite;
