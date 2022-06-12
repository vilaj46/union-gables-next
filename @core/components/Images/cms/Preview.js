import React from "react";

import { Images } from "../Images";

import createImages from "../utilities/createImages";

export const Preview = ({ value }) => {
  const { image = {}, images = [] } = value;

  let margin;
  try {
    margin = image.margin;
  } catch {
    margin = 0;
  }

  const { src, alt } = createImages(image);
  const cdnImages = createImages({}, images);

  return <Images src={src} alt={alt} images={cdnImages} margin={margin} />;
};
