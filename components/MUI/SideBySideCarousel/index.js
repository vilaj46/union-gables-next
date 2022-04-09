import React from "react";
import styled from "styled-components";
import { Box, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import device from "../../../styles/device";

import sampleData from "./data";

const ImageContainer = styled.div`
  width: 100%;
  min-width: 100%;
  z-index: 30;
  object-fit: cover;
  min-height: 100%;
  height: 100%;
  max-height: 720px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.tablet}) {
    flex-direction: row;
  }
`;

function SideBySideCarousel({ images = sampleData }) {
  const { carouselOne, carouselTwo } = images;
  return (
    <Container>
      <Flex>
        <Container>
          <Carousel
            showArrows={false}
            transitionTime={0}
            dynamicHeight={true}
            sx={{
              transitionDuration: "0",
              height: "100%",
            }}
          >
            {carouselOne.map((img) => {
              return (
                <ImageContainer key={img.src + img.alt}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                    }}
                    component="img"
                    alt={img.alt}
                    src={img.src}
                  />
                </ImageContainer>
              );
            })}
          </Carousel>
        </Container>
        <Container>
          <Carousel
            showArrows={false}
            transitionTime={0}
            dynamicHeight={true}
            sx={{
              transitionDuration: "0",
              height: "100%",
            }}
          >
            {carouselTwo.map((img) => {
              return (
                <ImageContainer key={img.src + img.alt}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                    }}
                    component="img"
                    alt={img.alt}
                    src={img.src}
                  />
                </ImageContainer>
              );
            })}
          </Carousel>
        </Container>
      </Flex>
    </Container>
  );
}

export default SideBySideCarousel;
