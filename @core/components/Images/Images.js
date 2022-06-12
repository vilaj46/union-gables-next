import React from "react";

import { Container } from "../Container";

import { Img, DoubleImg, DoubleImgsContainer } from "./Images.module.js";

export const Images = ({
  alt = "",
  center = false,
  height = "",
  images = [],
  margin = 0,
  src = "",
  width = "",
}) => {
  if (src.length > 0 && images.length === 0) {
    return (
      <Container>
        <Img
          src={src}
          alt={alt}
          style={{
            maxHeight: `${height !== "" ? `${height}px` : "null"}`,
            maxWidth: `${width !== "" ? `${width}px` : "null"}`,
            marginLeft: center ? "auto" : "",
            marginRight: center ? "auto" : "",
            marginTop: margin,
            marginBottom: margin,
            display: "block",
          }}
        />
      </Container>
    );
  } else if (images.length > 0) {
    return (
      <Container>
        <DoubleImgsContainer margin={margin}>
          {images.map(({ src, alt }) => (
            <DoubleImg src={src} alt={alt} key={src + alt} />
          ))}
        </DoubleImgsContainer>
      </Container>
    );
  } else {
    return <span>Upload an image.</span>;
  }
};
