import { useGetProducts } from "./useGetProducts";
import ProductItem from "./ProductItem";

function AllProducts() {
  const { products } = useGetProducts();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 w-full h-1/2 gap-6 ">
      {products?.data?.map((product) => (
        <ProductItem key={product?._id} product={product} />
      ))}
    </ul>
  );
}

export default AllProducts;
