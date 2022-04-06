import Youtube from "../index";

export default {
  name: "youtube",
  type: "object",
  title: "Youtube",
  preview: {
    component: Youtube,
  },
  fields: [
    {
      name: "href",
      type: "string",
      title: "Href",
      initialValue: "https://www.youtube.com/embed/lLu-Hkdum0I",
    },
  ],
};
