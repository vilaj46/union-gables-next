import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";

const Darken = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 10;
`;

const Description = styled.p`
  bottom: 0;
  color: #ffffff;
  font-size: 1.5rem;
  height: 25%;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  vertical-align: middle;
  width: 75%;
  z-index: 20;
`;

const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
  height: 250px;
  position: relative;
`;

const Title = styled.p`
  color: #ffffff;
  font-size: 1.875rem;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  z-index: 20;
`;

const Wrapper = styled.div`
  background-color: rgba(183, 171, 171, 0.5);
  padding-top: 100px;
`;

export const ImageTextSlider = ({
  items = sampleData,
  title = "Placeholder Title",
}) => {
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
    <Wrapper>
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
    </Wrapper>
  );
};
