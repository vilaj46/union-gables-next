import TripAdvisor from "../index";

import Preview from "./Preview";

export default {
  name: "tripAdvisor",
  type: "object",
  title: "Trip Advisor",
  fields: [
    {
      name: "width",
      title: "Width",
      type: "string",
      initialValue: "225",
    },
    {
      name: "height",
      title: "Height",
      type: "string",
      initialValue: "150",
    },
    {
      name: "center",
      title: "Center",
      description: "The position of the image. Otherwise, left aligned.",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    component: Preview,
    select: {
      center: "center",
    },
    prepare(selection) {
      const { center } = selection;
      return { center };
    },
  },
};
