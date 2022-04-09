import React from "react";

import Preview from "./Preview";

export default {
  title: "Side By Side Carousel",
  name: "sideCarousel",
  type: "object",
  fields: [
    {
      title: "Carousel One",
      name: "carouselOne",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      title: "Carousel Two",
      name: "carouselTwo",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      carouselOne: "carouselOne",
      carouselTwo: "carouselTwo",
    },
    prepare(selection) {
      const { carouselOne = [], carouselTwo = [] } = selection;
      return { carouselOne, carouselTwo };
    },
    component: Preview,
  },
};
