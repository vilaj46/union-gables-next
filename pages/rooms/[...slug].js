import React from "react";
import groq from "groq";
import Link from "next/link";
import Head from "next/head";
// import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";

// No drop down for rooms in header.
// Dropdown for other things though.

// A way to showcase specific rooms.
// Can be simple better placement for higher quality rooms

// Room Rooms and Home Page
// Keep image slider
// Mobile Header and Footer

// RedBallLinks mobile friendly.
// / https://codepen.io/ryasan86/pen/QXwEbM

// Sanity Client
import client from "../../client";

// Renderers
import BlockRenderer from "../../renderers/BlockRenderer";
import ImageRenderer from "../../renderers/ImageRenderer";
import BreakRenderer from "../../renderers/BreakRenderer";
import ObjectRenderer from "../../renderers/ObjectRenderer";
import CarouselRenderer from "../../renderers/CarouselRenderer";
import SideCarouselRenderer from "../../renderers/SideCarouselRenderer";
import TextCarouselRenderer from "../../renderers/TextCarouselRenderer";
import RedBallRenderer from "../../renderers/RedBallRenderer";
import DarkenSliderRenderer from "../../renderers/DarkenSliderRenderer";
import TripAdvisorRenderer from "../../renderers/TripAdvisorRenderer";
import YoutubeRenderer from "../../renderers/YoutubeRenderer";
import BookNowRenderer from "../../renderers/BookNowRenderer";
import AmenitiesRenderer from "../../renderers/AmenitiesRenderer";

// Components
import Map from "../../components/Map";
import Footer from "../../components/MUI/Footer";
import HeaderNavbar from "../../components/MUI/HeaderNavbar";
import FooterNavbar from "../../components/MUI/FooterNavbar";

function Rooms({
  page = {
    body: [],
  },
  headerLinks,
  slug,
}) {
  const { body, description, title } = page;
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description}></meta>
      </Head>
      Roomie doomie
      <HeaderNavbar LinkComponent={Link} links={headerLinks} />
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
      {slug === "home-page" && <Map />}
      <Footer />
      <FooterNavbar /> {/** Mobile only */}
    </main>
  );
}

const query = groq`*[_type == "room" && slug.current == $slug][0]{
  title,
  body
}`;

const headerQuery = groq`*[_type == "header"]`;

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "room"]`);
  const pages = await client.fetch(groq`*[_type == "page"]`);
  const createdPaths = paths.map((pageObj) => {
    return {
      params: { slug: [pageObj.slug.current] },
    };
  });

  const pagesPaths = pages.map((pageObj) => {
    return {
      params: { slug: [pageObj.slug.current] },
    };
  });

  return {
    paths: [...createdPaths, ...pagesPaths],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  const header = await client.fetch(headerQuery);
  const headerLinks = header[0].links;

  try {
    if (slug[0] === undefined) {
      throw "Rooms page.";
    }
    const page = await client.fetch(query, { slug: `/rooms/${slug[0]}` });

    return {
      props: {
        headerLinks: headerLinks,
        page: page || {},
        slug: slug[0],
      },
    };
  } catch {
    // Probably don't need this.
    const page = await client.fetch(query, { slug: "rooms" });

    return {
      props: {
        headerLinks: headerLinks,
        page: page,
        slug: "rooms",
      },
    };
  }
}

export default Rooms;
