import React from "react";

import SideBySideCarousel from "../index";
import createImages from "../utilities/createImages";

import sampleData from "../data";

function Preview(props) {
  try {
    const { value } = props;
    const { carouselOne, carouselTwo } = value;
    if (carouselOne.length === 0 || carouselTwo.length === 0) {
      throw "No images uploaded!";
    }

    const images = createImages(carouselOne, carouselTwo);
    return <SideBySideCarousel images={images} />;
  } catch {
    return (
      <div>
        This is just a sample: Upload images to get started.
        <SideBySideCarousel images={sampleData} />
      </div>
    );
  }
}

export default Preview;
