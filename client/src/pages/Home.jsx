import Products from "../features/products/Products";
import sliderData from "../data/SliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

function Home() {
  return (
    <div className="py-3">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        pagination={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 35,
          stretch: 200,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
        className="w-full h-40 md:h-72 shadow-custom rounded-sm"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index} className="md:p-2 rounded-sm">
            <div
              className="relative w-full h-full rounded-sm   bg-cover bg-no-repeat bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-white text-center p-6">
                <h2 className="text-sm   font-bold mb-2 text-white/80">
                  {slide.title}
                </h2>
                <p className="text-sm text-white/50">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Products />
    </div>
  );
}

export default Home;
