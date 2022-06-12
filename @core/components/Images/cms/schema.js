import { Preview } from "./Preview";

export default {
  name: "images",
  title: "Images",
  type: "object",
  description: "One image by itself OR two images side by side.",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "If we are uploading only one image.",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description: "What appears if the image is not loaded; good for SEO.",
        },
        {
          name: "height",
          title: "Max Height",
          type: "number",
          description:
            "Custom height. Can make images that are too large smaller. This isn't the definitive size because then it wouldn't scale well on different devices",
        },
        {
          name: "width",
          title: "Max Width",
          type: "number",
          description:
            "Custom width. Can make images that are too large smaller. This isn't the definitive size because then it wouldn't scale well on different devices",
        },
        {
          name: "center",
          title: "Center",
          description: "The position of the image. Otherwise, left aligned.",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "margin",
          title: "Margin",
          description: "Vertical spacing",
          type: "number",
          initialValue: 0
        }
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      description: "If we are uploading two images.",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
              description:
                "What appears if the image is not loaded; good for SEO.",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(2),
    },
  ],
  preview: {
    select: {
      image: "image",
      images: "images",
    },
    prepare(selection) {
      const { image, images } = selection;
      return {
        image,
        images,
      };
    },
    component: Preview,
  },
};
