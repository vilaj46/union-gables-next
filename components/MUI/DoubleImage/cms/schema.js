import React from "react";

import Preview from "./Preview";

export default {
  title: "Double Images",
  name: "doubleImages",
  type: "object",
  fields: [
    {
      title: "Images",
      name: "images",
      type: "object",
      fields: [
        {
          name: "imageOne",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
        {
          name: "imageTwo",
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
      const { images = {} } = selection;
      return { images };
    },
    component: Preview,
  },
};
