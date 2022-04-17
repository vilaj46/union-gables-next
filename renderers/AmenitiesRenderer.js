import React from "react";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";

import Amenities from "../components/MUI/Amenities";

const BlockRenderer = (props) => {
  const { style = "amenities" } = props.node;

  if (style === "amenities") {
    const { amenitiesList } = props;
    return <Amenities amenities={amenitiesList} />;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export default BlockRenderer;
