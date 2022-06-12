import Link from "next/link";

import { isDomesticLink } from "./link-utils";

export const createChildren = (children) => {
  const newChildren = children.map((child, idx) => {
    try {
      // Check if link
      const { _type } = child.props.node.mark;
      const text = child.props.node.children[0];

      // Do we want this as a CustomLink component.
      if (_type === "link") {
        const { href } = child.props.node.mark;
        const domestic = isDomesticLink(href);
        if (domestic) {
          return (
            <Link href={href} key={idx}>
              <a>{text}</a>
            </Link>
          );
        } else {
          return (
            <a href={href} key={idx} target="_blank">
              {text}
            </a>
          );
        }
      }

      return child;
    } catch {
      return child;
    }
  });

  return newChildren;
};
