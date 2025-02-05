import { useAddToFavorites } from "../context/FavorietsContext";
import ProductItem from "../features/products/ProductItem";

function Liberary() {
  const { addToFavorites } = useAddToFavorites();
  return (
    <ul className="grid grid-cols-3 gap-6">
      {addToFavorites.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default Liberary;
