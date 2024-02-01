import React from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import SignIn from "@/components/auth/signin";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <SignIn />
    </Wrapper>
  );
};

export default index;
