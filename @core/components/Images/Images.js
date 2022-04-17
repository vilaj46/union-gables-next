import React from "react";
import { Container } from "@mui/material";

import { Img, DoubleImg, DoubleImgsContainer } from "./Images.module.js";

export const Images = ({
  src = "",
  alt = "",
  height = "",
  width = "",
  center = false,
  images = [],
}) => {
  if (src.length > 0 && images.length === 0) {
    return (
      <Container maxWidth="md">
        <Img
          src={src}
          alt={alt}
          style={{
            maxHeight: `${height !== "" ? `${height}px` : "null"}`,
            maxWidth: `${width !== "" ? `${width}px` : "null"}`,
            marginLeft: center ? "auto" : "",
            marginRight: center ? "auto" : "",
            display: "block",
          }}
        />
      </Container>
    );
  } else if (images.length > 0) {
    return (
      <Container maxWidth="md">
        <DoubleImgsContainer>
          {images.map(({ src, alt }) => (
            <DoubleImg src={src} alt={alt} />
          ))}
        </DoubleImgsContainer>
      </Container>
    );
  } else {
    return <span>Upload an image.</span>;
  }
};
