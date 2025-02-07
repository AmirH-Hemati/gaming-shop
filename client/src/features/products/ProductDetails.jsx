import { useGetProduct } from "./useGetProduct";

function ProductDetails() {
  const { product } = useGetProduct();
  console.log(product);
  return <div>
    
  </div>;
}

export default ProductDetails;
