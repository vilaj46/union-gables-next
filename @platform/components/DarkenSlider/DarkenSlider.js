import React from "react";
import styled from "styled-components";

import { Container } from "../../../@core/components/Container";

import { Slider } from "./Slider";

import device from "../../../@core/styles/device";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  max-height: ${(props) => (props.long ? "250px" : "750px")};
  padding: 0;
  padding-bottom: 48px;
  padding-top: 48px;
  width: ${(props) => (props.long ? "100%" : "auto")};

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const DarkenSlider = ({
  list = [],
  long = false,
  bnb = "Union gables",
}) => (
  <Container>
    <Wrapper long={long}>
      {list.map((obj, index) => (
        <Slider bnb={bnb} data={obj} key={index} long={long} position={index} />
      ))}
    </Wrapper>
  </Container>
);
