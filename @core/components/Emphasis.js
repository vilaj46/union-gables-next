import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

const EmphasisElement = styled.em`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  font-style: italic;
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
  margin: 0 auto;
  padding-bottom: 48px;
  text-align: center;
`;

export const Emphasis = ({ children, fullScreen = false }) => {
  if (fullScreen) {
    // Not implemented yet.
    return <EmphasisElement>{children}</EmphasisElement>;
  } else {
    return (
      <Container>
        <EmphasisElement>{children}</EmphasisElement>
      </Container>
    );
  }
};
