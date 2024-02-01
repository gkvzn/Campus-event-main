import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import SldierItem from "./components/slider_item";

const setting: SwiperProps = {
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".slider-n",
    prevEl: ".slider-p",
  },
  modules: [Navigation],
  loop: true,
};

const ShopSlider: React.FC = () => {
  const [slider, setSldier] = useState(false);

  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setIsLoop(true);
    setSldier(true);
  }, []);

  return (
    <>
      <h1 className="slider_title">
        Explore the vibrant world of Emirati artistry through our exclusive
        E-commerce platform in Abu Dhabi.
      </h1>

      {slider && (
        <Swiper
          loop={isLoop}
          {...setting}
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            968: {
              slidesPerView: 4,
            },
          }}
          className="swiper-container top-slider tp-slider slider-active"
        ></Swiper>
      )}

      <div className="container p-relative slider-actions-main">
        <div className="d-flex align-items-center gap-3 justify-content-center">
          <div className="slider-p slider-actions">
            <img src="/assets/media/slider/left.svg" alt="" />
          </div>
          <div className="slider-n slider-actions">
            <img src="/assets/media/slider/right.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

// This function ensures that the data used for rendering on the server side is the same as on the client side

export default ShopSlider;
