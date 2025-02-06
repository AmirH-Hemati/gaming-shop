import { useGetProducts } from "../features/products/useGetProducts";

function EditProducts() {
  const { products } = useGetProducts();
  return (
    <div className=" flex flex-col h-full w-full overflow-hidden  text-sm md:text-base">
      <div className="w-full font-semibold md:mt-8 grid grid-cols-[1fr_2fr_1fr_1fr] gap-3  bg-[#F9FAFB]  md:gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>image</p>
        <p>name</p>
        <p>price</p>
        <p>edit</p>
      </div>
      <ul className="bg-white w-full flex flex-col overflow-y-auto h-full md:h-full    ">
        {products?.data.map((p) => (
          <li
            key={p._id}
            className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-3 w-full bg-white  px-4 py-6 md:gap-6 border-2 border-black/10"
          >
            <img src={p.image} alt="" className="w-20  object-cover" />
            <p className="truncate flex items-center">{p.title}</p>
            <p className="flex items-center">{p.price}</p>
            <div className="flex items-center gap-2 md:gap-7"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditProducts;
