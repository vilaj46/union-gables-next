import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

import fontStyles from "../../styles/fonts/fontStyles";

const FontStyles = fontStyles[0];
const Theme = fontStyles[1];

const CenterSpan = styled.span`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;

  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.base};
`;

export function Center({ children }) {
  return (
    <Theme>
      <FontStyles />
      <Container maxWidth="md">
        <CenterSpan>{children}</CenterSpan>
      </Container>
    </Theme>
  );
}

export default Center;
