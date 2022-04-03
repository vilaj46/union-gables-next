import React, { useState } from "react";
import styled from "styled-components";

import fontStyles from "../../styles/fonts/fontStyles";

const FontStyles = fontStyles[0];
const Theme = fontStyles[1];

import ThreeReasonsNumber from "./components/ThreeReasonsNumber";
import ThreeReasonsBackground from "./components/ThreeReasonsBackground";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 450px;
`;

const Brightness = styled.div`
  filter: brightness(50%);
  width: 100%;
  overflow: hidden;
`;

const TextContainer = styled.div`
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  position: absolute;
  margin-top: 1.75rem;
  font-family: ${({ theme: { fonts } }) => fonts.droid};
`;

const Title = styled.span`
  display: block;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Description = styled.span`
  color: #ffffff;
  width: 95%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 1rem;
  height: 40px;
`;
const NumbersContainer = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 65%;
  display: flex;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.75rem;
`;

function ReasonsToStay({ list = [] }) {
  const [active, setActive] = useState(1);
  const [desc, setDesc] = useState(list[0].desc);
  const [src, setSrc] = useState(list[0].src);
  const [alt, setAlt] = useState(list[0].alt);

  const click = (index) => {
    setActive(index);
    setDesc(list[index - 1].desc);
    setSrc(list[index - 1].src);
    setAlt(list[index - 1].alt);
  };

  const reason = list.length <= 1 ? "reason" : "reasons";
  const title = `${list.length} ${reason} to stay with us`;

  return (
    <Theme>
      <FontStyles />

      <Container>
        <Brightness>
          <ThreeReasonsBackground src={src} alt={alt} />
        </Brightness>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{desc}</Description>
        </TextContainer>
        <NumbersContainer>
          {list.map((item, index) => {
            return (
              <ThreeReasonsNumber
                text={index + 1}
                active={active}
                click={click}
                key={index + 1}
              />
            );
          })}
        </NumbersContainer>
      </Container>
    </Theme>
  );
}

export default ReasonsToStay;
