import React from "react";
import styled from "styled-components";

const Small = styled.small`
  color: #ffffff;
  display: block;
  padding-bottom: 1.5rem;
  z-index: 30;
`;

const LinkWrapper = styled.a`
  border: 1px solid
    ${(props) =>
      props.bnb.toLowerCase() === "union gables"
        ? props.theme.colors.mediumRed
        : props.theme.colors.jellyBean};
  color: ${(props) =>
    props.bnb.toLowerCase() === "union gables"
      ? props.theme.colors.mediumRed
      : props.theme.colors.jellyBean};
  display: block;
  cursor: pointer;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  letter-spacing: 0.1rem;
  line-height: ${({ theme: { lineHeights } }) => lineHeights.small};
  margin: 0 auto;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 50%;

  &:hover {
    background-color: ${(props) =>
      props.bnb.toLowerCase() === "union gables"
        ? props.theme.colors.mediumRed
        : props.theme.colors.jellyBean};
    color: #ffffff;
  }
`;

const TextWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  transition-duration: 500ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 40;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateX(1000%);
  transition-duration: 500ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  width: 75%;
  z-index: 40;
`;

export const SecondaryText = ({ bnb, data, id }) => (
  <Wrapper id={id}>
    <TextWrapper>
      <Small>{data.lideText}</Small>
      <data.Component href={data.href}>
        <LinkWrapper bnb={bnb}>{data.buttonText}</LinkWrapper>
      </data.Component>
    </TextWrapper>
  </Wrapper>
);
