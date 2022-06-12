import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

import { ColumnsOfLinks } from "../@core/components/ColumnsOfLinks";
import { PageTitles } from "../@core/components/PageTitles/PageTitles";

import { DarkenSlider } from "../@platform/components/DarkenSlider/DarkenSlider";
import { ImageTextSlider } from "../@platform/components/ImageTextSlider";

import createDarkenSliderList from "../components/DarkenSlider/utilities/createDarkenSliderList";
import createItems from "../components/MUI/TextCarousel/utilities/createItems";
import createLinkObjects from "../components/RedBallLinks/utilities/createLinkObjects";

const ObjectRenderer = (props) => {
  const { _type } = props.node;

  if (_type === "darkenSlider") {
    const { bnb, darken_slider } = props.node;
    const list = createDarkenSliderList(darken_slider, Link);
    return <DarkenSlider bnb={bnb} list={list} />;
  }

  if (_type === "pageTitles") {
    const { bnb, center, fullScreen, header, margin, text } = props.node;
    return (
      <PageTitles
        bnb={bnb}
        center={center}
        fullScreen={fullScreen}
        header={header}
        margin={margin}
        text={text}
      />
    );
  }

  if (_type === "columnOfLinks") {
    const links = createLinkObjects(props.node.columnOfLinks);
    return <ColumnsOfLinks links={links} padding={20} />;
  }

  if (_type === "text_carousel") {
    const { node } = props;
    const { items, title } = node;
    const carouselItems = createItems(items);
    return <ImageTextSlider items={carouselItems} title={title} />;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

export default ObjectRenderer;
