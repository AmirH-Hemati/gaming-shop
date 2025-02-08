import sliderData from "../data/SliderData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { Link } from "react-router-dom";
function Slider() {
  return (
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
      coverflowEffect={{
        rotate: 35,
        stretch: 200,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
      className="w-full  h-40 md:h-60 shadow-custom rounded-sm"
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index} className=" rounded-sm">
          <Link to={`/categories`} className="w-full h-full">
            <div className="absolute inset-0 bg-black/20"></div>
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
