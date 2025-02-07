import Products from "../features/products/Products";

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
  const slides = [
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.ZOXwa_SUDDwiEJVIIhdOWAHaHa&pid=Api",
      title: "🎮 کیبورد گیمینگ حرفه‌ای",
      description: "نورپردازی RGB و عملکرد بی‌نظیر برای تجربه بهتر بازی",
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.u_zO5KTmG0QgzjWAyCltegHaEH&pid=Api",
      title: "🖱️ ماوس گیمینگ با دقت بالا",
      description: "سنسور اپتیکال حرفه‌ای با طراحی ارگونومیک",
    },
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.BkgRXVhZnzVSDbCX3ajDWAHaI-&pid=Api",
      title: "🎧 هدست گیمینگ فراگیر",
      description: "صدای سه‌بعدی با کیفیت بالا برای ارتباط بهتر در بازی",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.MQ1iKwU1N-VUDG4qlWxRQwHaEK&pid=Api",
      title: "🖥️ مانیتور گیمینگ 144Hz",
      description: "صفحه‌نمایش حرفه‌ای با نرخ تازه‌سازی بالا",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.dMjQApX8S9OY5MPehXh8twHaE8&pid=Api",
      title: "⌨️ صندلی گیمینگ ارگونومیک",
      description: "راحتی بیشتر برای بازی‌های طولانی",
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.z_F8lW_nFeGoNJlqZ_vuZgHaEK&pid=Api",
      title: "🕹️ کنسول بازی جدید",
      description: "تجربه نسل جدید بازی‌های ویدیویی",
    },
  ];
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
        {slides.map((slide, index) => (
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
