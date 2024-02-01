
import CalendarIndex from "@/components/product-wishlist/index-calendar";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Calender" />
      <CalendarIndex />
    </Wrapper>
  );
};

export default index;

index.authenticate = true;
