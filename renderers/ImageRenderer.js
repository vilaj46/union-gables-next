import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { Images } from "../@core/components/Images/Images";

import createImages from "../@core/components/Images/utilities/createImages";
import urlFor from "../clientUtils/urlFor";

const ImageRenderer = (props) => {
  const { style = "image" } = props.node;
  const { _type } = props.node;

  if (_type === "images") {
    const { image: img, images: imgs } = props.node;
    const { src, alt } = createImages(img);
    const { height = "", width = "", center = false } = img;
    const images = createImages({}, imgs);

    let margin;
    try {
      margin = img.margin;
    } catch {
      margin = 0;
    }

    return (
      <Images
        alt={alt}
        center={center}
        height={height}
        images={images}
        margin={margin}
        src={src}
        width={width}
      />
    );
  }

  if (style === "image") {
    const { src, alt } = urlFor(props.node);
    return <Images src={src} alt={alt} />;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

export default ImageRenderer;
