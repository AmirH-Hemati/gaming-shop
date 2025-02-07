import { useAddToFavorites } from "../context/FavorietsContext";
import ProductItem from "../features/products/ProductItem";
import Heading from "../ui/Heading";
import ProductNotExist from "../ui/ProductNotExist";

function Liberary() {
  const { addToFavorites } = useAddToFavorites();
  if (addToFavorites?.length < 1) {
    return <ProductNotExist>Your library is empty</ProductNotExist>;
  }
  return (
    <div>
      <Heading text={`علاقه مندی ها `} />
      <ul className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {addToFavorites?.map((product) => (
          <ProductItem key={product?._id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Liberary;
