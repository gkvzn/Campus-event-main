import React from "react";
import ModulechangeTabs from "@/components/modules/components/module_change_tab";
import ShopSlider from "../modules/shop_slider";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import EventSlider from "../modules/event_slider";

const HeroBanner: React.FC = () => {
  const { home_mode } = useSelector((state: RootState) => state.global);

  return (
    <>
      <section className="slider-area slider-tp-top pt-100 p-relative">
        <div className="container">
          {/* tabs modeule */}
          {/* <ModulechangeTabs /> */}
          {/* slider modules */}
          <EventSlider />
        </div>

        {/*  Module Changer Tabs */}

        {/* header video */}

        <div className="header-video">
          <div className="vid-overlay"></div>
          <img
            src="/assets/images/bgImage.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
