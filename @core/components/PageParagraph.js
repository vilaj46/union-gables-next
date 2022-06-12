import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

const Paragraph = styled.p`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
`;

export const PageParagraph = ({ children, fullScreen = false }) => {
  if (fullScreen) { // Not implemented yet.
    return <Paragraph>{children}</Paragraph>;
  } else {
    return (
      <Container>
        <Paragraph>{children}</Paragraph>
      </Container>
    );
  }
};
