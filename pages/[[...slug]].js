import React from "react";
import groq from "groq";
import Link from "next/link";
// import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";

// No drop down for rooms in header.
// Dropdown for other things though.

// A way to showcase specific rooms.
// Can be simple better placement for higher quality rooms

// Room Pages and Home Page
// Keep image slider
// Mobile Header and Footer

// RedBallLinks mobile friendly.
// / https://codepen.io/ryasan86/pen/QXwEbM

// Sanity Client
import client from "../client";

// Renderers
import BlockRenderer from "../renderers/BlockRenderer";
import ImageRenderer from "../renderers/ImageRenderer";
import BreakRenderer from "../renderers/BreakRenderer";
import ObjectRenderer from "../renderers/ObjectRenderer";
// import SlideShowRenderer from "../renderers/SlideShowRenderer";
import CarouselRenderer from "../renderers/CarouselRenderer";
import TextCarouselRenderer from "../renderers/TextCarouselRenderer";
import DarkenSliderRenderer from "../renderers/DarkenSliderRenderer";

// Components
import Map from "../components/Map";
import Footer from "../components/MUI/Footer";
import HeaderNavbar from "../components/MUI/HeaderNavbar";
import FooterNavbar from "../components/MUI/FooterNavbar";

function Pages({
  page = {
    body: [],
  },
  headerLinks,
  slug,
}) {
  const { body } = page;
  return (
    <main>
      <HeaderNavbar LinkComponent={Link} links={headerLinks} />
      <BlockContent
        blocks={body || []}
        serializers={{
          types: {
            block: BlockRenderer,
            image: ImageRenderer,
            doubleImages: ImageRenderer,
            break: BreakRenderer,
            redBallList: ObjectRenderer,
            carousel: CarouselRenderer,
            text_carousel: TextCarouselRenderer,
            darkenSlider: DarkenSliderRenderer,
          },
        }}
        {...client.config()}
      />
      {slug === "home-page" && <Map />}
      <Footer />
      <FooterNavbar /> {/** Mobile only */}
    </main>
  );
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  body
}`;

const headerQuery = groq`*[_type == "header"]`;

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

  try {
    const page = await client.fetch(query, { slug: slug[0] });
    return {
      props: {
        headerLinks: headerLinks,
        page: page || {},
        slug: slug[0],
      },
    };
  } catch {
    const page = await client.fetch(query, { slug: "home-page" });
    return {
      props: {
        headerLinks: headerLinks,
        page: page,
        slug: "home-page",
      },
    };
  }
}

export default Pages;
