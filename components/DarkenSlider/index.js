import React from "react";
import { Container } from "@mui/material";
import styled from "styled-components";

import device from "../../styles/device";

import globalStyles from "../../styles/fonts/fontStyles";

import IndividualSlider from "./components/IndividualSlider";

const FontStyles = globalStyles[0];
const Theme = globalStyles[1];

const DarkenSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => (props.long ? "100%" : "auto")};
  max-height: ${(props) => (props.long ? "250px" : "750px")};

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export default function DarkenSlider({ list = [], long = false }) {
  // Organize the list to meet our standards.

  const standardizedList = list.map((item) => {
    const newItem = { ...item };
    Object.keys(newItem).forEach((itemKey) => {
      if (itemKey !== "Component" && !!newItem[itemKey] === false) {
        // If not component and a falsey value
        newItem[itemKey] = `Placeholder for ${itemKey}`;
      } else if (itemKey === "Component" && !!newItem[itemKey] === false) {
        newItem[itemKey] = "span";
      }
    });
    return newItem;
  });

  return (
    <Theme>
      <FontStyles />
      <Container maxWidth="md">
        <DarkenSliderContainer long={long}>
          {standardizedList.map((obj, index) => (
            <IndividualSlider
              data={obj}
              key={index}
              position={index}
              long={long}
            />
          ))}
        </DarkenSliderContainer>
      </Container>
    </Theme>
  );
}
