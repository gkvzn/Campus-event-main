import React from "react";
import HeadBanner from "@/utils/global/banner";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import WishlistTypeButton from "./wishlist-type-button";

const Wishlist: React.FC = () => {
  return (
    <>
      <Header />
      <HeadBanner title="Wishlist" />
      <section
        className="cart-area pt-5 pb-10 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <WishlistTypeButton />
      </section>
      <Footer />
    </>
  );
};

export default Wishlist;
