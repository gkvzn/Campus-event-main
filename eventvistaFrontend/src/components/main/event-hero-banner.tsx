import React from "react";
import { EventSpaceHeadBannerProps } from "@/types_and_interfaces/types";

const EventHeroBanner: React.FC<EventSpaceHeadBannerProps> = ({
  title,
}) => {
  return (
    <>
      <section className="slider-area  slider-tp-top p-relative event-banner-slider">
        <div className="container ">
          <h1 className="slider_title  ">{title}</h1>
        </div>
        {/*  Module Changer Tabs */}
        {/*  Module Changer Tabs */}
        {/* header video */}
        <div className="header-video">
          <div className="vid-overlay"></div>
          <img
            src="/assets/images/bgImage.jpg"
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
          {/* <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4" />
          </video> */}
        </div>
      </section>
    </>
  );
};

export default EventHeroBanner;
