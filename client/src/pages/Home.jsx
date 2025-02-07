import Products from "../features/products/Products";
import Slider from "../ui/Slider";

function Home() {
  return (
    <div className="py-3">
      <Slider />
      <Products />
    </div>
  );
}

export default Home;
