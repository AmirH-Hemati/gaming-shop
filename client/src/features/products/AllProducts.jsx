import ProductNotExist from "../../ui/ProductNotExist";
import ProductItem from "./ProductItem";

function AllProducts({ products }) {
  if (products?.data.length == 0) {
    return <ProductNotExist>محصولی یافت نشد .</ProductNotExist>;
  }
  return (
    <ul className="box-border grid grid-cols-1 md:grid-cols-3 w-full h-1/2 gap-6 z-10">
      {products?.data.map((product) => (
        <ProductItem key={product?._id} product={product} />
      ))}
    </ul>
  );
}

export default AllProducts;
