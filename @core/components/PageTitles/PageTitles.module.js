import styled from "styled-components";

export const H1 = styled.h1`
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
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-transform: uppercase;
`;

export const H2 = styled.h2`
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
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-transform: uppercase;
`;

export const H3 = styled.h3`
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
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  color: ${({ theme, unionGables }) => {
    if (unionGables) {
      return theme.colors.darkRed;
    } else {
      // Brunswick
      return theme.colors.jellyBean;
    }
  }};
  font-family: ${({ theme: { fonts } }) => fonts.junicode};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.twoTimes};
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-transform: uppercase;
`;

export const H5 = styled.h5`
  color: ${({ theme, unionGables }) => {
    if (unionGables) {
      return theme.colors.darkRed;
    } else {
      // Brunswick
      return theme.colors.jellyBean;
    }
  }};
  font-family: ${({ theme: { fonts } }) => fonts.junicode};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.twoTimes};
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-transform: uppercase;
`;

export const H6 = styled.h6`
  color: ${({ theme, unionGables }) => {
    if (unionGables) {
      return theme.colors.darkRed;
    } else {
      // Brunswick
      return theme.colors.jellyBean;
    }
  }};
  font-family: ${({ theme: { fonts } }) => fonts.junicode};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.base};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.twoTimes};
  margin-top: ${(props) => props.margin}px;
  margin-bottom: ${(props) => props.margin}px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  text-transform: uppercase;
`;
