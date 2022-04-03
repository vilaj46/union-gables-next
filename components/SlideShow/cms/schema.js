import React from "react";

import SlideShowPreview from "./SlideShowPreview";

export default {
  title: "Slide Show",
  name: "slideShow",
  type: "object",
  fields: [
    {
      title: "Slides",
      name: "slides",
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
      slides: "slides",
    },
    prepare(selection) {
      const { slides = [] } = selection;
      return { slides };
    },
    component: SlideShowPreview,
  },
};
