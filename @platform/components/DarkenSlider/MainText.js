import React from "react";
import styled from "styled-components";

const OpacBackground = styled.div`
  background-color: ${({ bnb }) =>
    bnb.toLowerCase() === "union gables"
      ? "rgba(62, 14, 30, 0.55)"
      : "rgba(79, 120, 130, 0.55)"};
  padding: 0.5rem;
  position: relative;
`;

const TextWrapper = styled.span`
  color: #ffffff;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
  text-transform: uppercase;
  z-index: 30;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  transition-duration: 500ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-50%);
  z-index: 20;
`;

export const MainText = ({ bnb, children, id }) => (
  <Wrapper id={id} onMouseEnter={(e) => e.preventDefault()}>
    <OpacBackground bnb={bnb}>
      <TextWrapper>{children}</TextWrapper>
    </OpacBackground>
  </Wrapper>
);
