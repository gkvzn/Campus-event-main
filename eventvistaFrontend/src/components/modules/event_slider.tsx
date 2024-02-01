import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import SldierItem from "./components/slider_item";
import { useModelGetEvents } from "@/models/events.model";

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

const EventSlider: React.FC = () => {
  const [slider, setSldier] = useState(false);

  const [isLoop, setIsLoop] = useState(false);

  const { data: all_events, isLoading: all_events_loading } = useModelGetEvents(
    { take: 12 }
  );

  useEffect(() => {
    setIsLoop(true);
    setSldier(true);
  }, []);

  return (
    <>
      <h1 className="slider_title">
        You have power over your mind - not outside events. Realize this, and
        you will find strength.
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
              slidesPerView: 1,
            },
          }}
          className="swiper-container top-slider tp-slider slider-active"
        >
          {!all_events_loading &&
            all_events?.data?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <SldierItem data={item} path="events" />
              </SwiperSlide>
            ))}
        </Swiper>
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

export default EventSlider;
