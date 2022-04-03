import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import TextCarousel from "../components/MUI/TextCarousel";
import createItems from "../components/MUI/TextCarousel/utilities/createItems";

const TextCarouselRenderer = (props) => {
  const { _type = "text_carousel" } = props.node;

  if (_type === "text_carousel") {
    const { node } = props;
    const { items, title } = node;
    const carouselItems = createItems(items);
    return <TextCarousel items={carouselItems} title={title} />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default TextCarouselRenderer;
