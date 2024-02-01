import React, { useEffect } from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import ViewAllEventsArea from "@/components/event/view-all-events-area";

const index = () => {

  

  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <ViewAllEventsArea />
      </Layout>
    </Wrapper>
  );
};

export default index;
