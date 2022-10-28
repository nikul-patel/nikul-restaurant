import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../prismicio";
import { components } from "../slices/";
import { Layout } from "../components/Layout";

import sm from "../sm.json";

const Index = ({ page, navigation, settings }) => {
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
        <script async defer src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${sm.repo}`}></script>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "home", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

  return {
    props: {
      page,
      navigation,
      settings,
    },
  };
}
