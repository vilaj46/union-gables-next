import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

import sampleData from "./data";
import device from "../../../styles/device";

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.laptop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Img = styled.img`
  margin-bottom: 25px;

  @media (${device.laptop}) {
    width: 49%;
    margin-bottom: 0;
  }
`;

function DoubleImage({ images = sampleData }) {
  console.log(images);
  return (
    <Container>
      <ImagesContainer>
        <Img src={images.imageOne.src} alt={images.imageOne.alt} />
        <Img src={images.imageTwo.src} alt={images.imageTwo.alt} />
      </ImagesContainer>
    </Container>
  );
}

export default DoubleImage;
