import styled from "styled-components";

export const H1 = styled.h1`
  text-transform: uppercase;
  color: ${({ theme, unionGables }) => {
    if (unionGables) {
      return theme.colors.red;
    } else {
      // Brunswick
      return theme.colors.jellyBean;
    }
  }};
  font-family: ${({ theme: { fonts } }) => fonts.junicode};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.fourTimes};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.fourTimes};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  color: ${({ theme, unionGables }) => {
    if (unionGables) {
      return theme.colors.mediumRed;
    } else {
      // Brunswick
      return theme.colors.jellyBean;
    }
  }};
  font-family: ${({ theme: { fonts } }) => fonts.junicode};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.threeTimes};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.threeTimes};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const H3 = styled.h3`
  text-transform: uppercase;
  color: ${({ theme, unionGables }) => {
    if (unionGables) {
      return theme.colors.darkRed;
    } else {
      // Brunswick
      return theme.colors.jellyBean;
    }
  }};
  font-family: ${({ theme: { fonts } }) => fonts.junicode};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.twoTimes};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.twoTimes};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;
