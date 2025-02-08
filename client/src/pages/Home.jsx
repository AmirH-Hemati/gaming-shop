import Products from "../features/products/Products";
import Slider from "../ui/Slider";

function Home() {
  return (
    <div className="box-border">
      <Slider />
      <Products />
    </div>
  );
}

export default Home;
