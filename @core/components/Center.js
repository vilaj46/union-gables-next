import React from "react";
import styled from "styled-components";

import { Container } from "./Container";

const CenterElement = styled.span`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  display: block;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Center = ({ children, fullScreen = false }) => {
  if (fullScreen) {
    // Not implemented yet.
    <CenterElement>{children}</CenterElement>;
  }
  return (
    <Container>
      <CenterElement>{children}</CenterElement>
    </Container>
  );
};
