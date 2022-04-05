import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";

import sampleData from "./data";

import device from "../../../styles/device";

const TextCarouselContainer = styled.div`
  padding-top: 100px;
  background-color: rgba(183, 171, 171, 0.5);
`;

const Title = styled.p`
  width: 100%;
  color: #ffffff;
  left: 0;
  right: 0;
  font-size: 1.875rem;
  position: absolute;
  text-transform: uppercase;
  z-index: 20;
  text-align: center;
`;

const ImageContainer = styled.div`
  height: 250px;
  position: relative;
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
`;

const Darken = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 10;
`;

const Description = styled.p`
  width: 75%;
  margin: auto;
  height: 25%;
  color: #ffffff;
  font-size: 1.5rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 20;
  text-align: center;
  vertical-align: middle;
`;

function TextCarousel({ title = "Placeholder Title", items = sampleData }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + 1 === items.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index - 1 === -1) {
      setIndex(items.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <TextCarouselContainer>
      <Carousel
        navButtonsAlwaysVisible={true}
        next={next}
        prev={prev}
        autoPlay={false}
        sx={{
          height: "100%",
        }}
      >
        <ImageContainer title={items[index].alt} src={items[index].src}>
          <Darken />
          <Title>{title}</Title>
          {items[index] !== undefined && (
            <Description>{items[index].desc}</Description>
          )}
        </ImageContainer>
      </Carousel>
    </TextCarouselContainer>
  );
}

export default TextCarousel;
