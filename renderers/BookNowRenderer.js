import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import BookNowButton from "../components/BookNowButton";

const BookNowRenderer = (props) => {
  const { style = "booknow" } = props.node;

  if (style === "booknow") {
    return <BookNowButton />;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export default BookNowRenderer;
