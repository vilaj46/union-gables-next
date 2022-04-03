import React from "react";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";

import Center from "../components/Center";
import Emphasis from "../components/Emphasis";
import Paragraph from "../components/MUI/Paragraph";
import CustomLink from "../components/CustomLink";
import PageTitle from "../components/PageTitle/PageTitle";

import createParagraphChildren from "../components/MUI/Paragraph/utilities/createParagraphChildren";

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");

    return <PageTitle header={Number(level)}>{props.children}</PageTitle>;
  }

  if (style === "normal") {
    const childrenWithCustomComponents = createParagraphChildren(
      props.children,
      CustomLink,
      Link
    );
    return <Paragraph>{childrenWithCustomComponents}</Paragraph>;
  }

  // if (style === "blockquote") {
  //   return <blockquote>- {props.children}</blockquote>;
  // }

  if (style === "em") {
    return <Emphasis>{props.children}</Emphasis>;
  }

  if (style === "center") {
    return <Center>{props.children}</Center>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

export default BlockRenderer;
