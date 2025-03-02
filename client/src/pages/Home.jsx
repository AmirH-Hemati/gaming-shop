import Products from "../features/products/Products";
import Seo from "../ui/Seo";
import Slider from "../ui/Slider";

function Home() {
  return (
    <div className="box-border">
      <Seo
        title={`فروشگاه گیمینگ | فروش لوازم گیمینگ با بهترین قیمت `}
        description="بهترین لپ‌تاپ‌های گیمینگ را با بهترین قیمت از ما خریداری کنید."
        keywords={`لپ تاپ گیمینگ , خرید گیمینگ , موس گیمینگ , کیبورد گیمینگ`}
      />
      <Slider />
      <Products />
    </div>
  );
}

export default Home;
