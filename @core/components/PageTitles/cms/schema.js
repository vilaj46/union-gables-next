import { Preview } from "./Preview";

export default {
  name: "pageTitles",
  title: "Page Titles",
  type: "object",
  fields: [
    {
      name: "text",
      description: "What will appear on the page.",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bnb",
      description: "What color the text will be.",
      title: "BNB",
      type: "string",
      options: {
        list: ["Union Gables", "Brunswick"],
      },
      initialValue: "Union Gables",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "header",
      description: "The size of the text.",
      title: "Header Number",
      type: "number",
      options: {
        list: [1, 2, 3],
      },
      initialValue: 1,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "center",
      title: "Center",
      description: "The position of the text. Otherwise, left aligned.",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "margin",
      title: "Margin",
      description: "Vertical margin to help space.",
      type: "number",
      initialValue: 0,
    },
    {
      name: "fullScreen",
      title: "Full Screen",
      description: "Whether or not the width is full screen or not.",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      bnb: "bnb",
      center: "center",
      fullScreen: "fullScreen",
      header: "header",
      margin: "margin",
      text: "text",
    },
    prepare(selection) {
      const { bnb, center, fullScreen, header, margin, text } = selection;
      return {
        bnb,
        center,
        fullScreen,
        header,
        margin,
        text,
      };
    },
    component: Preview,
  },
};
