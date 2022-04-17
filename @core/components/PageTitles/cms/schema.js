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
  ],
  preview: {
    select: {
      text: "text",
      bnb: "bnb",
      header: "header",
      center: "center",
    },
    prepare(selection) {
      const { text, bnb, header, center } = selection;
      return {
        text,
        bnb,
        header,
        center,
      };
    },
    component: Preview,
  },
};
