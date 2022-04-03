import React from "react";

import Preview from "./Preview";

export default {
  title: "Text Carousel",
  name: "text_carousel",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Items",
      name: "items",
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
            {
              name: "desc",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      items: "items",
      title: "title",
    },
    prepare(selection) {
      const { items = [], title = "Placeholder Title" } = selection;
      return { items, title };
    },
    component: Preview,
  },
};
