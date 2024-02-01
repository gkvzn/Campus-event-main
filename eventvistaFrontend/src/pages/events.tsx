import React, { useEffect } from "react";
import Layout from "@/layout/layout";
import Events from "@/components/main/events";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import { useRouter } from "next/router";
import { ErrorToast } from "@/utils/helper";

const index = () => {

  

  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <Events />
      </Layout>
    </Wrapper>
  );
};

export default index;
