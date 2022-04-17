import React from "react";

import { Images } from "../Images";

import createImages from "../utilities/createImages";

export const Preview = ({ value }) => {
  const { image = {}, images = [] } = value;

  const { src, alt } = createImages(image);
  const cdnImages = createImages({}, images);

  return <Images src={src} alt={alt} images={cdnImages} />;
};
