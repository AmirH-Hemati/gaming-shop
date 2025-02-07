import Products from "../features/products/Products";

// import { Swiper } from "swiper";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

function Home() {
  return (
    <div>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
        <div>Slide 6</div>
        <div>Slide 7</div>
        <div>Slide 8</div>
        <div>Slide 9</div>
      </Swiper> */}
      <Products />
    </div>
  );
}

export default Home;
