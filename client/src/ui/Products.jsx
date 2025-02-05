import { useGetProducts } from "../features/products/useGetProducts";
import ProductItem from "./ProductItem";

function Products() {
  const { products } = useGetProducts();
  return (
    <ul className="grid grid-cols-3 w-full h-1/2 gap-4">
      {products?.data?.map((product) => (
        <ProductItem key={product?._id} product={product} />
      ))}
    </ul>
  );
}

export default Products;
