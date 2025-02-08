import { ArrowLeft } from "iconsax-react";
import Heading from "../../ui/Heading";
import AllProducts from "./AllProducts";
import { useGetProducts } from "./useGetProducts";

function Products() {
  const { products } = useGetProducts();
  return (
    <>
      <div className="box-border flex justify-between items-center w-full font-semibold my-2">
        <Heading text={`محصولات`} />
        <p className="flex items-center text-nowrap text-sm gap-2 text-white hover:text-[#0998A8] cursor-pointer">
          <ArrowLeft size="22" color="#fff" />
          <span>همه محصولات</span>
        </p>
      </div>
      <AllProducts products={products} />
    </>
  );
}

export default Products;
