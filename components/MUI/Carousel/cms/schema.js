import React from "react";

import Preview from "./Preview";

export default {
  title: "Carousel",
  name: "carousel",
  type: "object",
  fields: [
    {
      title: "Images",
      name: "images",
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
      images: "images",
    },
    prepare(selection) {
      const { images = [] } = selection;
      return { images };
    },
    component: Preview,
  },
};
