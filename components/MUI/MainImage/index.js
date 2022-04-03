import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

function MainImage({ src = "", alt = "" }) {
  return (
    <Container>
      <ImageContainer src={src} alt={alt} />
    </Container>
  );
}

export default MainImage;
