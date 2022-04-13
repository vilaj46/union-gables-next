import BookNowButton from "../index";

export default {
  name: "booknow",
  type: "object",
  title: "Book Now",
  preview: {
    component: BookNowButton,
  },
  fields: [
    {
      name: "booknow",
      type: "string",
    },
  ],
};
