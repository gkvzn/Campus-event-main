import React from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import FogetPassword from "@/components/auth/forget-password";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <FogetPassword />
    </Wrapper>
  );
};

export default index;
