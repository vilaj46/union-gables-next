import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import SlideShow from "../components/SlideShow";

import createSlideImages from "../components/SlideShow/utilities/createSlideImages";

const SlideShowRenderer = (props) => {
  const { _type = "slideShow" } = props.node;

  if (_type === "slideShow") {
    const { node } = props;
    const { slides } = node;
    const slideImages = createSlideImages(slides);
    return <SlideShow slides={slideImages} />;
  }
  return BlockContent.defaultSerializers.types.block(props);
};

export default SlideShowRenderer;
