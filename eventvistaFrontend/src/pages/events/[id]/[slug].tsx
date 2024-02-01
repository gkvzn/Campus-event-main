import React, { useEffect } from "react";
import Layout from "@/layout/layout";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import EventDetailed from "@/components/main/event-detailed";
import { GetServerSideProps } from "next";
import {
  Event,
  ItemDetailsViewPageProps,
  MetaPropsT,
} from "@/types_and_interfaces/types";
import events_service from "@/services/events.service";
import { NextPage } from "next/types";
import Head from "next/head";

const index: NextPage<MetaPropsT<Event>> = ({ item }) => {
  return (
    <Wrapper>
      <SEO pageTitle="Event Detailed" />
      <Head>
        <title>{item.name}</title>
        <meta property="og:title" content={item.name} />
        <meta property="og:description" content={item.name} />
        <meta
          property="og:image"
          content={item.feature_image || "URL_TO_FALLBACK_IMAGE"}
        />
      </Head>
      <Layout>
        <EventDetailed />
      </Layout>
    </Wrapper>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  // Destructure params to get param1 and param2
  const { id, slug } = params as ItemDetailsViewPageProps;

  const data = await events_service.solo({ item: id });

  return {
    props: {
      id,
      slug,
      item: data.data,
    },
  };
};
