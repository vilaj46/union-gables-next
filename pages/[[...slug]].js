import React from "react";
import groq from "groq";
import Link from "next/link";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";

// Sanity Client
import client from "../client";

// Renderers
import BlockRenderer from "../renderers/BlockRenderer";
import ImageRenderer from "../renderers/ImageRenderer";
import BreakRenderer from "../renderers/BreakRenderer";
import ObjectRenderer from "../renderers/ObjectRenderer";
import CarouselRenderer from "../renderers/CarouselRenderer";
import SideCarouselRenderer from "../renderers/SideCarouselRenderer";
import TextCarouselRenderer from "../renderers/TextCarouselRenderer";
import RedBallRenderer from "../renderers/RedBallRenderer";
import DarkenSliderRenderer from "../renderers/DarkenSliderRenderer";
import TripAdvisorRenderer from "../renderers/TripAdvisorRenderer";
import YoutubeRenderer from "../renderers/YoutubeRenderer";

// Components
import { Header } from "../@platform/components/Header/Header";
import Footer from "../components/MUI/Footer";
import FooterNavbar from "../components/MUI/FooterNavbar";

import styles from "../@core/styles/theme.default";

const { Theme, Fonts } = styles;

function Pages({
  page = {
    body: [],
  },
  headerLinks,
  footerData,
}) {
  const { body, title, description } = page;
  return (
    <main style={{ overflow: "hidden" }}>
      <Head>
        {/* <meta name="viewport" content="width=device-width" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={description}></meta>
        <title>{title}</title>
      </Head>
      <Theme>
        <Fonts />
        {headerLinks && <Header links={headerLinks} />}
        {/* <HeaderNavbar LinkComponent={Link} links={headerLinks} /> */}
        <BlockContent
          blocks={body || []}
          serializers={{
            types: {
              block: BlockRenderer, // Default
              break: BreakRenderer,
              redBallList: ObjectRenderer,
              redBall: RedBallRenderer,
              carousel: CarouselRenderer,
              sideCarousel: SideCarouselRenderer,
              text_carousel: TextCarouselRenderer,
              darkenSlider: DarkenSliderRenderer,
              tripAdvisor: TripAdvisorRenderer,
              youtube: YoutubeRenderer,

              // Objects
              pageTitles: ObjectRenderer,

              // Images
              image: ImageRenderer,
              images: ImageRenderer,
              doubleImages: ImageRenderer,
            },
          }}
          {...client.config()}
        />
        {footerData && <Footer data={footerData} />}
        {footerData && <FooterNavbar data={footerData} />} Mobile only
      </Theme>
    </main>
  );
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  body,
  description
}`;

const headerQuery = groq`*[_type == "header"]`;
const footerQuery = groq`*[_type == "footer"]`;

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "page"]`);
  const createdPaths = paths.map((pageObj) => {
    return {
      params: { slug: [pageObj.slug.current] },
    };
  });

  return {
    paths: createdPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  const header = await client.fetch(headerQuery);
  const headerLinks = header[0].links;
  const footer = await client.fetch(footerQuery);
  const footerData = footer[0];

  try {
    const page = await client.fetch(query, { slug: slug[0] });
    return {
      props: {
        headerLinks: headerLinks,
        footerData: footerData,
        page: page || {},
        slug: slug[0],
      },
    };
  } catch {
    const page = await client.fetch(query, { slug: "home-page" });
    return {
      props: {
        headerLinks: headerLinks,
        footerData: footerData,
        page: page,
        slug: "home-page",
      },
    };
  }
}

export default Pages;
