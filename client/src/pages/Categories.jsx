import AllProducts from "../features/products/AllProducts";
import { useGetProductsByFilter } from "../features/products/useGetProductsByFilter";
import FilterButtons from "../ui/FilterButtons";
import Search from "../ui/Search";

function Categories() {
  const { products } = useGetProductsByFilter();
  return (
    <div className="w-full h-full mt-4">
      <div className="flex w-full justify-between">
        <FilterButtons />
        <Search />
      </div>
      <AllProducts products={products} />
    </div>
  );
}

export default Categories;
