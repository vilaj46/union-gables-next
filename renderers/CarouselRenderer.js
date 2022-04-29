import React from "react";
import BlockContent from "@sanity/block-content-to-react";

// import Carousel from "../components/MUI/Carousel";
import createImages from "../components/MUI/Carousel/utilities/createImages";

import { Carousel } from "../@core/components/Carousel/Carousel";

const CarouselRenderer = (props) => {
  const { _type = "carousel" } = props.node;

  if (_type === "carousel") {
    const { node } = props;
    const { images } = node;
    const carouselImages = createImages(images);
    return <Carousel images={carouselImages} />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default CarouselRenderer;
