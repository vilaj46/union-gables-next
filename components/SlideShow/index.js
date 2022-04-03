import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import sampleData from "./data";

import device from "../../styles/device";

// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react

const delay = 5500;

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slider = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
`;

const Slide = styled.div`
  display: inline-block;
  width: 100%;
`;

const Dots = styled.div`
  text-align: center;
`;

const Dot = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: #350313;
  &.active {
    background-color: #aa4465;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: 250px;
  @media (${device.mobileL}) {
    height: 350px;
  }
  @media (${device.tablet}) {
    height: 550px;
  }
  @media (${device.laptop}) {
    height: 650px;
  }
  @media (${device.laptop}) {
    height: 750px;
  }
  @media (${device.desktop}) {
    height: 80vh;
    object-fit: cover;
  }
`;

function SlideShow({ slides = sampleData }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Container>
      <Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {slides.map((img, idx) => {
          return (
            <Slide key={idx}>
              <Img src={img.src} alt={img.alt} />
            </Slide>
          );
        })}
      </Slider>

      <Dots>
        {slides.map((_, idx) => (
          <Dot
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></Dot>
        ))}
      </Dots>
    </Container>
  );
}

export default SlideShow;
