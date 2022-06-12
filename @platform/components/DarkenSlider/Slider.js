import React, { useState } from "react";
import styled from "styled-components";

import { Darken } from "./Darken";
import { MainText } from "./MainText";
import { SecondaryText } from "./SecondaryText";

import device from "../../../@core/styles/device";

const ImageWrapper = styled.img`
  object-fit: cover;
  width: 100%;
  z-index: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => (props.long ? "0" : "0.25rem")};
  margin-left: ${(props) => (props.long ? "0" : "0.25rem")};
  margin-right: ${(props) => (props.long ? "0" : "0.25rem")};
  margin-top: ${(props) => (props.long ? "0" : "0.25rem")};
  max-height: ${(props) => (props.long ? "250px" : "700px")};
  overflow: hidden;
  position: relative;
  text-align: center;
  width: ${(props) => (props.long ? "100%" : "auto")};

  &:hover #mainText {
    transform: translateX(-1000%);
  }

  &:hover #secondaryText {
    transform: translateX(0);
    transform: translateY(-50%);
  }

  @media ${device.tablet} {
    flex-direction: row;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

export const Slider = ({ bnb, data, position, long }) => {
  const { mainText = "Main Text", src = "" } = data;
  const [hovering, setHovering] = useState(false);

  const mouseEnter = () => setHovering(true);
  const mouseLeave = () => setHovering(false);

  return (
    <Wrapper
      position={position}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      long={long}
    >
      {hovering && <Darken />}
      <MainText bnb={bnb} id="mainText">
        {mainText}
      </MainText>
      <SecondaryText bnb={bnb} data={data} id="secondaryText" />
      <ImageWrapper src={src} />
    </Wrapper>
  );
};
