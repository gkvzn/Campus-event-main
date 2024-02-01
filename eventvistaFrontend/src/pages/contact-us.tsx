import AboutUs from "@/components/about-us";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";
import ContactUs from "../components/contact-us/index";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Contact Us" />
      <ContactUs />
    </Wrapper>
  );
};

export default index;
