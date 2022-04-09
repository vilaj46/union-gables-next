import React from "react";

import hrefLocation from "../../../CustomLink/utilities/hrefLocation";

function createParagraphChildren(children, LinkComponent, NextComponent) {
  const newChildren = children.map((child) => {
    if (typeof child === "string") {
      return child;
    } else {
      // Type is an object
      const { node } = child.props;
      const { mark } = node;
      const { _type } = mark;
      const text = node.children[0];
      if (_type === "link") {
        const { href } = mark;
        const location = hrefLocation(href);
        if (location === "foreign") {
          return (
            <LinkComponent href={href} key={href + text + randNumber()}>
              {text}
            </LinkComponent>
          );
        } else {
          return (
            <LinkComponent
              Component={NextComponent}
              href={href}
              key={href + text + randNumber()}
            >
              {text}
            </LinkComponent>
          );
        }
      } else {
        return <strong key={node.children[0]}>{node.children[0]}</strong>;
      }
    }
  });

  return newChildren;
}

function randNumber() {
  return Math.random(1000000000);
}

export default createParagraphChildren;
