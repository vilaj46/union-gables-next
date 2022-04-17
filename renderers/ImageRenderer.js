import React from "react";
import BlockContent from "@sanity/block-content-to-react";

// Utilities
import urlFor from "../clientUtils/urlFor";
import createImages from "../@core/components/Images/utilities/createImages";

// Components
import { Images } from "../@core/components/Images/Images";
// import DoubleImage from "../components/MUI/DoubleImage";
// import createImages from "../components/MUI/DoubleImage/utilities/createImages";

const ImageRenderer = (props) => {
  const { style = "image" } = props.node;
  const { _type } = props.node;

  if (_type === "images") {
    const { image: img, images: imgs } = props.node;
    const { src, alt } = createImages(img);
    const { height = "", width = "", center = false } = img;
    const images = createImages({}, imgs);
    return (
      <Images
        src={src}
        alt={alt}
        images={images}
        height={height}
        width={width}
        center={center}
      />
    );
  }

  if (style === "image") {
    const { src, alt } = urlFor(props.node);
    return <Images src={src} alt={alt} />;
  }

  // if (_type === "doubleImages") {
  //   const images = createImages(props.node.images);
  //   return <DoubleImage images={images} />;
  // }

  return BlockContent.defaultSerializers.types.block(props);
};

export default ImageRenderer;
