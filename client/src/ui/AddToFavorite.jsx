import { Heart } from "iconsax-react";
import { useAddToFavorites } from "../context/FavorietsContext";

function AddToFavorite({ product }) {
  const { handelAddToFavorites, productExists } = useAddToFavorites();
  return (
    <Heart
      size="28"
      color="white"
      variant={productExists(product) ? "Bold" : null}
      onClick={() => handelAddToFavorites(product)}
      className="cursor-pointer"
    />
  );
}

export default AddToFavorite;
