import React from "react";
import HeadBanner from "@/utils/global/banner";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import WishlistTypeButton from "./wishlist-type-button";
import CalendarTypeButton from "./calendar-type-button";

const CalendarIndex: React.FC = () => {
  return (
    <>
      <Header />
      <HeadBanner title="Your Calender" />
      <section
        className="cart-area pt-10 pb-10 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <CalendarTypeButton />
      </section>
      <Footer />
    </>
  );
};

export default CalendarIndex;
