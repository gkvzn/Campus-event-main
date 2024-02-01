import React from "react";
import { HeadBannerProps } from "../../types_and_interfaces/types";

const HeadBanner: React.FC<HeadBannerProps> = ({ title }) => {
  return (
    <>
      <section
        className="breadcrumb__area breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/images/bg.jpeg)`,
        }}
      >
        <h2 className="tp-breadcrumb__title">{title}</h2>
      </section>
    </>
  );
};

export default HeadBanner;
