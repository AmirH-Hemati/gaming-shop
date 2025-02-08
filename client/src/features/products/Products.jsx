import { ArrowRight } from "iconsax-react";
import Heading from "../../ui/Heading";
import AllProducts from "./AllProducts";
import { useGetProducts } from "./useGetProducts";

function Products() {
  const { products } = useGetProducts();
  return (
    <>
      <div className="box-border flex justify-between items-center w-full font-semibold my-2">
        <Heading text={`Product`} />
        <p className="flex items-center text-nowrap gap-2 text-white hover:text-[#0998A8] cursor-pointer">
          <span>show more</span>
          <ArrowRight size="24" color="#fff" />
        </p>
      </div>
      <AllProducts products={products} />
    </>
  );
}

export default Products;
