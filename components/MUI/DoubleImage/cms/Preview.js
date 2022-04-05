import React from "react";

import DoubleImage from "../index";

import createImages from "../utilities/createImages";

import sampleData from "../data";

function Preview(props) {
  const { value } = props;
  try {
    const { images } = value;
    const imgs = createImages(images);
    if (Object.keys(imgs).length !== 2) {
      throw "Not enough images";
    }
    return <DoubleImage images={imgs} />;
  } catch {
    return (
      <div>
        THIS IS JUST A SAMPLE:
        <DoubleImage images={sampleData} />
      </div>
    );
  }
}

export default Preview;
