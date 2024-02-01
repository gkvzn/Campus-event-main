import React from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import SignUp from "@/components/auth/signup";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <SignUp />
    </Wrapper>
  );
};

export default index;
