import TripAdvisor from "../index";

import Preview from "./Preview";

export default {
  name: "tripAdvisor",
  type: "object",
  title: "Trip Advisor",
  preview: {
    component: Preview,
  },
  fields: [
    {
      name: "width",
      title: "Width",
      type: "string",
      initialValue: "200",
    },
    {
      name: "height",
      title: "Height",
      type: "string",
      initialValue: "150",
    },
  ],
};
