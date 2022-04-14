import Preview from "./Preview";

export default {
  title: "Amenities",
  name: "amenities",
  type: "object",
  fields: [
    {
      title: "Amenities List",
      name: "amenitiesList",
      type: "array",
      of: [
        {
          title: "Amenity",
          name: "amenity",
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      amenities: "amenitiesList",
    },
    prepare(selection) {
      const { amenities } = selection;
      return {
        amenities,
      };
    },
    component: Preview,
  },
};
