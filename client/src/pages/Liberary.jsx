import { useAddToFavorites } from "../context/FavorietsContext";
import ProductItem from "../features/products/ProductItem";
import Heading from "../ui/Heading";

function Liberary() {
  const { addToFavorites } = useAddToFavorites();
  return (
    <div>
      <Heading text={`Favorites`}/>
      <ul className="grid grid-cols-1 md:grid-cols-3 grid-cols-3 gap-6">
        {addToFavorites.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Liberary;
