import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { Ball } from "./Ball";

import { isDomesticLink } from "../utilities/link-utils";
import { splitIntoColumns } from "../utilities/array-utils";

const Anchor = styled.a`
  color: ${(props) =>
    props.bnb !== "Union gables"
      ? props.theme.colors.darkRed
      : props.theme.colors.jellyBean};
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`;

const Col = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const ColItem = styled.li`
  margin: 4px 20px;
`;

const UL = styled.ul`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding-bottom: ${(props) => props.padding}px;
  padding-left: 0;
  padding-right: 0;
  padding-top: ${(props) => props.padding}px;
`;

const Column = ({ bnb, links }) => (
  <Col>
    {links.map((l, idx) => {
      const domestic = isDomesticLink(l.href);
      if (domestic) {
        return (
          <ColItem key={idx}>
            <Link href={l.href}>
              <Anchor>{l.text}</Anchor>
            </Link>
            {idx !== links.length - 1 && <Ball />}
          </ColItem>
        );
      } else {
        return (
          <ColItem key={idx}>
            <Anchor href={l.href} target="_blank">
              {l.text}
            </Anchor>
            {idx !== links.length - 1 && <Ball />}
          </ColItem>
        );
      }
    })}
  </Col>
);

export const ColumnsOfLinks = ({ bnb, links, numCol = 2, padding = 0 }) => {
  const splitLinks = splitIntoColumns(numCol, links);
  return (
    <UL padding={padding}>
      {splitLinks.map((colLinks, idx) => {
        return <Column bnb={bnb} key={idx} links={colLinks} />;
      })}
    </UL>
  );
};
