import React from "react";
import BlockContent from "@sanity/block-content-to-react";

import { Center } from "../@core/components/Center";
import { createChildren } from "../@core/utilities/typography-utils";
import { Emphasis } from "../@core/components/Emphasis";
import { PageParagraph } from "../@core/components/PageParagraph";

const BlockRenderer = (props) => {
  const { style } = props.node;

  if (style === "center") {
    const children = createChildren(props.children);
    return <Center>{children}</Center>;
  }

  if (style === "em") {
    const children = createChildren(props.children);
    return <Emphasis>{children}</Emphasis>;
  }

  if (style === "normal") {
    const children = createChildren(props.children);
    return <PageParagraph>{children}</PageParagraph>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export default BlockRenderer;
