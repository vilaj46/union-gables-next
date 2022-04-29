import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: cover;
`;

const BallsContainer = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;

const Ball = styled.div`
  width: 12px;
  height: 12px;
  background-color: #3f3f3f;
  border-radius: 100%;
  cursor: pointer;
  margin: 0 3px;
`;

const sampleImages = [
  {
    src: "/static/images/slides/mainSlide1.jpg",
    alt: "Union Gables",
  },
  {
    src: "/static/images/slides/mainSlide2.jpg",
    alt: "Union Gables",
  },
  {
    src: "/static/images/slides/mainSlide3.jpg",
    alt: "Union Gables",
  },
];

export const Carousel = ({ images = sampleImages }) => {
  const DELAY = 10000;
  const timeoutRef = useRef(null);
  const [slide, setSlide] = useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlide((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      DELAY
    );

    return () => {
      resetTimeout();
    };
  }, [slide]);
  return (
    <div>
      {<Img src={images[slide].src} alt={images[slide].alt} />}
      <BallsContainer>
        {images.map((d, i) => (
          <Ball onClick={() => setSlide(i)} key={d.src + i} />
        ))}
      </BallsContainer>
    </div>
  );
};
