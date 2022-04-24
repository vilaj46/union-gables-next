import React from "react";
import groq from "groq";
import Link from "next/link";
import Head from "next/head";
import BlockContent from "@sanity/block-content-to-react";

/**
 * TODO:
 * 4. Footer:
 *  a. Not current in the CMS.
 *  b. Style the on hover differently?
 *  c. Footer needs to have more fluid scaling.
 *  d. Make the buttons smaller.
 *  e. Are the links working?
 *
 * 6. Gallery:
 *  a. Add a photo gallery.
 * 7. Add Blog section.
 * 8. Room pages need help!
 * 9. 404 page
 * 10. Site map
 *
 *
 *
 * Different style to RedBallLinks that I may want to try in the future:
 * https://codepen.io/ryasan86/pen/QXwEbM
 */

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
import Footer from "../components/MUI/Footer";
import HeaderNavbar from "../components/MUI/HeaderNavbar";
import FooterNavbar from "../components/MUI/FooterNavbar";

function Pages({
  page = {
    body: [],
  },
  headerLinks,
}) {
  const { body, title, description } = page;

  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content={description}></meta>
      </Head>
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
      <Footer />
      <FooterNavbar /> {/** Mobile only */}
    </main>
  );
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  body,
  description
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
    console.log(page);
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
