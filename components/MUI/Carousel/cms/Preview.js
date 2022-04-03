import React from "react";

import CustomCarousel from "../index";
import createImages from "../utilities/createImages";

import sampleData from "../data";

function Preview(props) {
  try {
    const { value } = props;
    const { images = [] } = value;

    if (images.length === 0) {
      throw "No images uploaded!";
    }

    const carouselImages = createImages(images);
    return <CustomCarousel images={carouselImages} />;
  } catch {
    return (
      <div>
        This is just a sample: Upload images to get started.
        <CustomCarousel images={sampleData} />
      </div>
    );
  }
}

export default Preview;
