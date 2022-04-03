import React from "react";

import SlideShow from "../index";
import createSlideImages from "../utilities/createSlideImages";

function SlideShowPreview(props) {
  try {
    const { value } = props;
    const { slides = [] } = value;
    const slideImages = createSlideImages(slides);
    return <SlideShow slides={slideImages} />;
  } catch {
    return <span>Slide Show Preview</span>;
  }
}

export default SlideShowPreview;
