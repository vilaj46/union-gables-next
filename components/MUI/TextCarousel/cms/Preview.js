import React from "react";

import TextCarousel from "../index";
import createItems from "../utilities/createItems";

import sampleData from "../data";
import { create } from "@mui/material/styles/createTransitions";

function Preview(props) {
  const { value } = props;

  try {
    const { items = [], title = "Placeholder Title" } = value;
    if (items.length === 0) {
      throw "No images uploaded!";
    }

    const carouselItems = createItems(items);

    return <TextCarousel items={carouselItems} title={title} />;
  } catch {
    const { title = "Placeholder Title" } = value;
    return (
      <div>
        This is just a sample: Upload images to get started.
        <TextCarousel items={sampleData} title={title} />
      </div>
    );
  }

  // try {
  //   const { items = [], title = "Placeholder Title" } = value;

  //   if (items.length === 0) {
  //     throw "No images uploaded!";
  //   }

  //   const carouselItems = createItems(items);
  //   console.log(carouselItems);
  //   return <TextCarousel items={carouselItems} title={title} />;
  // } catch {
  // const { title = "Placeholder Title" } = value;
  // return (
  //   <div>
  //     This is just a sample: Upload images to get started.
  //     <TextCarousel items={sampleData} title={title} />
  //   </div>
  // );
  // }
}

export default Preview;
