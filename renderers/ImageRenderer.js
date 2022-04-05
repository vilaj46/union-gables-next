import React from "react";
import BlockContent from "@sanity/block-content-to-react";
// import {SubImage} from 'union-gables-components'
// import 'union-gables-components/dist/index.css'

// import client from "../lib/sanity.js";

// Utilities
import urlFor from "../clientUtils/urlFor";

// Components
import MainImage from "../components/MUI/MainImage";
import DoubleImage from "../components/MUI/DoubleImage";
import createImages from "../components/MUI/DoubleImage/utilities/createImages";

const ImageRenderer = (props) => {
  const { style = "image" } = props.node;
  const { _type } = props.node;

  if (_type === "doubleImages") {
    const images = createImages(props.node.images);
    return <DoubleImage images={images} />;
  }

  if (style === "image") {
    const imageInformation = urlFor(props.node);
    return <MainImage src={imageInformation.src} alt={imageInformation.alt} />;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

export default ImageRenderer;
