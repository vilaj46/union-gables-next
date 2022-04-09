import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import SideBySideCarousel from "../components/MUI/SideBySideCarousel";
import createImages from "../components/MUI/SideBySideCarousel/utilities/createImages";

const CarouselRenderer = (props) => {
  const { _type = "sideCarousel" } = props.node;

  if (_type === "sideCarousel") {
    const { node } = props;
    const { carouselOne, carouselTwo } = node;
    const images = createImages(carouselOne, carouselTwo);
    return <SideBySideCarousel images={images} />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default CarouselRenderer;
