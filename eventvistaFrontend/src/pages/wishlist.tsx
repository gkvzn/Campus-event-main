import Wishlist from "@/components/product-wishlist";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Wishlist" />
      <Wishlist />
    </Wrapper>
  );
};

export default index;

index.authenticate = true;
