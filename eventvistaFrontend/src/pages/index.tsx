import React, { useEffect } from "react";
import Layout from "@/layout/layout";
import Home from "@/components/main/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import { useRouter } from "next/router";
import { ErrorToast } from "@/utils/helper";

const index = () => {

  const router = useRouter()
  const removeParams = () => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("payment_intent") != null) {
      ErrorToast("Your Order Has Been Placed.", "success", "Order")
    }
    url.searchParams.delete('payment_intent');
    url.searchParams.delete('payment_intent_client_secret');
    url.searchParams.delete('redirect_status');
    router.replace(url.pathname + url.search)
  }
  
  useEffect(() => {
    removeParams();
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <Home />
      </Layout>
    </Wrapper>
  );
};

export default index;
