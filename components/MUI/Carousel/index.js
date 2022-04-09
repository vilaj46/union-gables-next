import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import device from "../../../styles/device";

import sampleData from "./data";

const ImageContainer = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  z-index: 30;
  object-fit: cover;

  @media (${device.tablet}) {
    height: 50vh;
  }
  @media (${device.laptop}) {
    height: 65vh;
  }
  @media (${device.laptopL}) {
    height: 90vh;
  }
`;

const Container = styled.div`
  overflow: hidden;
  height: 30vh;

  @media (${device.tablet}) {
    height: 50vh;
  }
  @media (${device.laptop}) {
    height: 65vh;
  }
  @media (${device.laptopL}) {
    height: 90vh;
  }
`;

function CustomCarousel({ images = sampleData }) {
  console.log(images);
  return (
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
        {images.map((img) => {
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
  );
}

export default CustomCarousel;
